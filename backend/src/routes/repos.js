// ──────────────────────────────────────────────
// GitMax Backend — Repository Routes
// ──────────────────────────────────────────────
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { getDb } = require('../db');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// All repo routes require authentication
router.use(authenticate);

/**
 * GET /api/repos
 * List all connected repositories for the authenticated user.
 */
router.get('/', (req, res) => {
  const db = getDb();
  const repos = db.prepare(`
    SELECT id, provider, name, url, health_score, last_analyzed, version_tag, status, created_at
    FROM repositories WHERE user_id = ?
    ORDER BY created_at DESC
  `).all(req.user.id);

  res.json({ repositories: repos });
});

/**
 * POST /api/repos/connect
 * Connect and register a new repository.
 * Body: { provider: "github"|"gitlab", repo_url: "https://..." }
 */
router.post('/connect', (req, res) => {
  const { provider, repo_url } = req.body;

  // Validate input
  if (!provider || !['github', 'gitlab'].includes(provider)) {
    return res.status(400).json({ error: 'Invalid provider. Must be "github" or "gitlab".' });
  }
  if (!repo_url || typeof repo_url !== 'string') {
    return res.status(400).json({ error: 'Repository URL is required.' });
  }

  // Extract repo name from URL
  const urlParts = repo_url.replace(/\.git$/, '').split('/');
  const repoName = urlParts.slice(-2).join('/'); // e.g. "owner/repo-name"

  const db = getDb();

  // Check for duplicate
  const existing = db.prepare('SELECT id FROM repositories WHERE user_id = ? AND url = ?').get(req.user.id, repo_url);
  if (existing) {
    return res.status(409).json({ error: 'Repository already connected.' });
  }

  const id = uuidv4();
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO repositories (id, user_id, provider, name, url, health_score, last_analyzed, version_tag, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(id, req.user.id, provider, repoName, repo_url, 0, null, 'v0.0.0', 'connected');

  const repo = db.prepare('SELECT * FROM repositories WHERE id = ?').get(id);

  res.status(201).json({
    message: 'Repository connected successfully',
    repository: repo,
  });
});

/**
 * DELETE /api/repos/:repo_id
 * Disconnect (remove) a repository.
 */
router.delete('/:repo_id', (req, res) => {
  const { repo_id } = req.params;
  const db = getDb();

  // Ensure the repo belongs to the user
  const repo = db.prepare('SELECT id FROM repositories WHERE id = ? AND user_id = ?').get(repo_id, req.user.id);
  if (!repo) {
    return res.status(404).json({ error: 'Repository not found.' });
  }

  db.prepare('DELETE FROM repositories WHERE id = ?').run(repo_id);

  res.json({ message: 'Repository disconnected successfully' });
});

/**
 * GET /api/repos/stats
 * Return aggregate statistics across all user repositories.
 */
router.get('/stats', (req, res) => {
  const db = getDb();
  const userId = req.user.id;

  const totalRepos = db.prepare('SELECT COUNT(*) as count FROM repositories WHERE user_id = ?').get(userId).count;
  const avgHealth = db.prepare('SELECT AVG(health_score) as avg FROM repositories WHERE user_id = ?').get(userId).avg || 0;

  // Simulated intelligence metrics (in production these would come from analysis jobs)
  const stats = {
    total_repositories: totalRepos,
    total_vulnerabilities: Math.floor(Math.random() * 15) + totalRepos * 3,
    avg_code_health: Math.round(avgHealth * 100) / 100,
    critical_alerts: Math.floor(Math.random() * 5),
    ai_suggestions_count: Math.floor(Math.random() * 25) + totalRepos * 5,
  };

  res.json(stats);
});

module.exports = router;
