// ──────────────────────────────────────────────
// GitMax Backend — JWT Middleware
// ──────────────────────────────────────────────
const jwt = require('jsonwebtoken');
const { getDb } = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'gitmax_fallback_secret';

/**
 * Sign a new JWT for a user.
 */
function signToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      provider: user.provider,
    },
    JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}

/**
 * Express middleware — verifies JWT from Authorization header or cookie.
 * Attaches `req.user` on success.
 */
function authenticate(req, res, next) {
  // Accept token from: Authorization: Bearer <token>  OR  cookie "token"
  let token = null;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7);
  } else if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  // Check blacklist
  const db = getDb();
  const blacklisted = db.prepare('SELECT token FROM blacklisted_tokens WHERE token = ?').get(token);
  if (blacklisted) {
    return res.status(401).json({ error: 'Token has been invalidated' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    req.token = token;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

module.exports = { signToken, authenticate };
