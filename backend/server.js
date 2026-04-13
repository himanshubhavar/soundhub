// ──────────────────────────────────────────────
// GitMax Backend hshshyftfswdy
// ──────────────────────────────────────────────
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const authRoutes = require('./src/routes/auth');
const repoRoutes = require('./src/routes/repos');
const prRoutes = require('./src/routes/prs');
const analyzeRoutes = require('./src/routes/analyze');
const dashboardRoutes = require('./src/routes/dashboard');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Global Middleware ───────────────────────
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
);

// ─── Health Check ────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'GitMax API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// ─── Route Mounting ──────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/repos', repoRoutes);
app.use('/api', prRoutes);
app.use('/api/analyze-pr', analyzeRoutes);
app.use('/api/dashboard', dashboardRoutes);

// ─── 404 Handler ─────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.url} not found` });
});

// ─── Global Error Handler ────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ─── Start Server ────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  ⚡ GitMax API running on http://localhost:${PORT}`);
  console.log(`  📡 Health check:    http://localhost:${PORT}/api/health`);
  console.log(`  🔑 Auth routes:     /api/auth/github, /api/auth/gitlab`);
  console.log(`  📦 Repo routes:     /api/repos`);
  console.log(`  🔀 PR routes:       /api/repos/:owner/:repo/prs, /api/prs/stats`);
  console.log(`  🧪 Analysis:        /api/analyze-pr`);
  console.log(`  📊 Dashboard:       /api/dashboard/overview, /ai-agents, /insight-of-day\n`);
});
