// ──────────────────────────────────────────────
// GitMax Backend — Auth Routes (GitHub + GitLab OAuth)
// ──────────────────────────────────────────────
const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const { getDb } = require('../db');
const { signToken, authenticate } = require('../middleware/auth');

const router = express.Router();

// ─── GitHub OAuth ────────────────────────────

/**
 * POST /api/auth/github
 * Returns the GitHub OAuth authorization URL for the frontend to redirect to.
 */
router.post('/github', (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = process.env.GITHUB_CALLBACK_URL;
  const scope = 'read:user user:email repo';

  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

  res.json({ url });
});

/**
 * GET /api/auth/github/callback
 * Exchanges the authorization code for an access token, fetches the user
 * profile, upserts the user in the DB, and issues a JWT.
 */
router.get('/github/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'Missing authorization code' });

  try {
    // 1. Exchange code for access token
    const tokenRes = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: process.env.GITHUB_CALLBACK_URL,
      },
      { headers: { Accept: 'application/json' } }
    );

    const accessToken = tokenRes.data.access_token;
    if (!accessToken) {
      return res.status(401).json({ error: 'Failed to obtain access token' });
    }

    // 2. Fetch user profile from GitHub
    const userRes = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const ghUser = userRes.data;

    // 3. Fetch primary email (may be private)
    let email = ghUser.email;
    if (!email) {
      try {
        const emailRes = await axios.get('https://api.github.com/user/emails', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const primary = emailRes.data.find((e) => e.primary);
        email = primary ? primary.email : emailRes.data[0]?.email || null;
      } catch { /* email stays null */ }
    }

    // 4. Upsert user in database
    const db = getDb();
    const userId = uuidv4();
    const existing = db.prepare('SELECT id FROM users WHERE provider = ? AND provider_id = ?').get('github', String(ghUser.id));

    if (existing) {
      db.prepare(`
        UPDATE users SET username = ?, display_name = ?, email = ?, avatar_url = ?, access_token = ?, updated_at = datetime('now')
        WHERE id = ?
      `).run(ghUser.login, ghUser.name || ghUser.login, email, ghUser.avatar_url, accessToken, existing.id);
    } else {
      db.prepare(`
        INSERT INTO users (id, provider, provider_id, username, display_name, email, avatar_url, access_token)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).run(userId, 'github', String(ghUser.id), ghUser.login, ghUser.name || ghUser.login, email, ghUser.avatar_url, accessToken);
    }

    const user = db.prepare('SELECT * FROM users WHERE provider = ? AND provider_id = ?').get('github', String(ghUser.id));
    const token = signToken(user);

    // 5. Redirect to frontend with JWT in cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/?auth=success`);
  } catch (err) {
    console.error('GitHub OAuth error:', err.message);
    res.status(500).json({ error: 'OAuth authentication failed', details: err.message });
  }
});

// ─── GitLab OAuth ────────────────────────────

/**
 * POST /api/auth/gitlab
 * Returns the GitLab OAuth authorization URL.
 */
router.post('/gitlab', (req, res) => {
  const clientId = process.env.GITLAB_CLIENT_ID;
  const redirectUri = process.env.GITLAB_CALLBACK_URL;
  const scope = 'read_user read_api read_repository';

  const url = `https://gitlab.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}`;

  res.json({ url });
});

/**
 * GET /api/auth/gitlab/callback
 * Exchanges the authorization code → access token → user profile → JWT.
 */
router.get('/gitlab/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'Missing authorization code' });

  try {
    // 1. Exchange code for access token
    const tokenRes = await axios.post('https://gitlab.com/oauth/token', {
      client_id: process.env.GITLAB_CLIENT_ID,
      client_secret: process.env.GITLAB_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.GITLAB_CALLBACK_URL,
    });

    const accessToken = tokenRes.data.access_token;
    if (!accessToken) {
      return res.status(401).json({ error: 'Failed to obtain access token' });
    }

    // 2. Fetch user profile from GitLab
    const userRes = await axios.get('https://gitlab.com/api/v4/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const glUser = userRes.data;

    // 3. Upsert user
    const db = getDb();
    const userId = uuidv4();
    const existing = db.prepare('SELECT id FROM users WHERE provider = ? AND provider_id = ?').get('gitlab', String(glUser.id));

    if (existing) {
      db.prepare(`
        UPDATE users SET username = ?, display_name = ?, email = ?, avatar_url = ?, access_token = ?, updated_at = datetime('now')
        WHERE id = ?
      `).run(glUser.username, glUser.name || glUser.username, glUser.email, glUser.avatar_url, accessToken, existing.id);
    } else {
      db.prepare(`
        INSERT INTO users (id, provider, provider_id, username, display_name, email, avatar_url, access_token)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).run(userId, 'gitlab', String(glUser.id), glUser.username, glUser.name || glUser.username, glUser.email, glUser.avatar_url, accessToken);
    }

    const user = db.prepare('SELECT * FROM users WHERE provider = ? AND provider_id = ?').get('gitlab', String(glUser.id));
    const token = signToken(user);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/?auth=success`);
  } catch (err) {
    console.error('GitLab OAuth error:', err.message);
    res.status(500).json({ error: 'OAuth authentication failed', details: err.message });
  }
});

// ─── Session Endpoints ───────────────────────

/**
 * GET /api/auth/me
 * Returns the current authenticated user's profile.
 */
router.get('/me', authenticate, (req, res) => {
  const db = getDb();
  const user = db.prepare('SELECT id, provider, username, display_name, email, avatar_url, created_at FROM users WHERE id = ?').get(req.user.id);

  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ user });
});

/**
 * POST /api/auth/logout
 * Blacklists the current JWT and clears the cookie.
 */
router.post('/logout', authenticate, (req, res) => {
  const db = getDb();
  const decoded = jwt.decode(req.token);
  db.prepare('INSERT OR IGNORE INTO blacklisted_tokens (token, exp) VALUES (?, ?)').run(req.token, decoded.exp);

  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;
