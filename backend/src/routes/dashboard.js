// ──────────────────────────────────────────────
// GitMax Backend — Dashboard Routes
// ──────────────────────────────────────────────
const express = require('express');
const { getDb } = require('../db');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// All dashboard routes require authentication
router.use(authenticate);

/**
 * GET /api/dashboard/overview
 * Returns aggregate dashboard data: repo count, health score,
 * risk modules, alerts, top risky repos, and risk trend.
 */
router.get('/overview', (req, res) => {
  const db = getDb();
  const userId = req.user.id;

  const totalRepos = db.prepare('SELECT COUNT(*) as c FROM repositories WHERE user_id = ?').get(userId).c;
  const avgHealth = db.prepare('SELECT AVG(health_score) as avg FROM repositories WHERE user_id = ?').get(userId).avg || 0;

  // Fetch repos for "top risky" list
  const repos = db.prepare(`
    SELECT name, health_score, status FROM repositories
    WHERE user_id = ? ORDER BY health_score ASC LIMIT 5
  `).all(userId);

  const commitAuthors = ['alex-dev', 'sarah-eng', 'mike-ops', 'priya-sec', 'jordan-ml'];
  const timeAgos = ['2 hours ago', '5 hours ago', '1 day ago', '3 days ago', '1 week ago'];

  const topRiskyRepos = repos.length > 0
    ? repos.map((r, i) => ({
        name: r.name,
        last_commit_by: commitAuthors[i % commitAuthors.length],
        last_commit_ago: timeAgos[i % timeAgos.length],
        health_score: r.health_score,
        risk_level: r.health_score < 40 ? 'HIGH' : r.health_score < 70 ? 'MEDIUM' : 'LOW',
      }))
    : generateMockRiskyRepos();

  // Generate 30-day risk trend
  const riskTrend = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    riskTrend.push({
      date: date.toISOString().split('T')[0],
      score: Math.round((60 + Math.sin(i * 0.3) * 15 + Math.random() * 10) * 100) / 100,
    });
  }

  const highRiskModules = Math.floor(Math.random() * 5) + 2;
  const recentAlerts = Math.floor(Math.random() * 8) + 1;

  res.json({
    total_repositories: totalRepos || 5,
    health_score_percent: Math.round(avgHealth || 78.5),
    high_risk_modules_count: highRiskModules,
    recent_alerts_count: recentAlerts,
    last_alert_time: new Date(Date.now() - Math.random() * 3600000).toISOString(),
    top_risky_repos: topRiskyRepos,
    risk_trend: riskTrend,
  });
});

/**
 * GET /api/dashboard/ai-agents
 * Returns the status of all AI agents in the platform.
 */
router.get('/ai-agents', (req, res) => {
  const agents = [
    {
      name: 'CodeMiner Agent',
      status: 'ACTIVE',
      last_action: 'Extracted diff from PR #247 in core-api',
      last_action_time: new Date(Date.now() - 120000).toISOString(),
    },
    {
      name: 'Risk Analyzer Agent',
      status: 'ACTIVE',
      last_action: 'Computed risk scores for 12 modified files',
      last_action_time: new Date(Date.now() - 300000).toISOString(),
    },
    {
      name: 'Cost Estimator Agent',
      status: 'STANDBY',
      last_action: 'Estimated ₹45,200 potential loss for payment-service PR',
      last_action_time: new Date(Date.now() - 1800000).toISOString(),
    },
    {
      name: 'Security Scanner Agent',
      status: 'ACTIVE',
      last_action: 'Scanned dependencies — 0 critical CVEs found',
      last_action_time: new Date(Date.now() - 600000).toISOString(),
    },
    {
      name: 'Report Generator Agent',
      status: 'STANDBY',
      last_action: 'Generated executive summary for sprint review',
      last_action_time: new Date(Date.now() - 3600000).toISOString(),
    },
  ];

  res.json({ agents });
});

/**
 * GET /api/dashboard/insight-of-day
 * Returns the AI-generated insight of the day.
 */
router.get('/insight-of-day', (req, res) => {
  const db = getDb();
  const userId = req.user.id;

  // Get a random repo for context
  const repo = db.prepare('SELECT name FROM repositories WHERE user_id = ? ORDER BY RANDOM() LIMIT 1').get(userId);

  const insights = [
    {
      headline: 'Authentication Module Risk Spike',
      detail: 'The auth.service.ts file has been modified in 14 of the last 20 PRs. Cyclomatic complexity has increased by 34% this week. Consider refactoring into smaller, testable units.',
      repo: repo ? repo.name : 'core-api',
      link: '/insights',
    },
    {
      headline: 'Test Coverage Below Threshold',
      detail: 'Coverage for the payment module dropped to 62% after recent changes. Critical paths involving webhook processing lack integration tests. This increases deployment risk significantly.',
      repo: repo ? repo.name : 'payment-service',
      link: '/insights',
    },
    {
      headline: 'Dependency Vulnerability Detected',
      detail: 'A transitive dependency (lodash@4.17.20) has a known prototype pollution vulnerability (CVE-2026-1847). Update to 4.17.22+ recommended immediately.',
      repo: repo ? repo.name : 'shared-utils',
      link: '/reports',
    },
    {
      headline: 'Merge Conflict Hotspot Identified',
      detail: 'The config/routes.ts file has been involved in merge conflicts 8 times this month. Consider splitting route definitions by domain to reduce contention.',
      repo: repo ? repo.name : 'api-gateway',
      link: '/repositories',
    },
    {
      headline: 'Deployment Success Rate Improving',
      detail: 'Your deployment success rate has improved from 87% to 96% over the past 2 weeks. The introduction of staged rollouts and automated canary checks is showing measurable results.',
      repo: repo ? repo.name : 'infrastructure',
      link: '/insights',
    },
  ];

  const todayIndex = new Date().getDate() % insights.length;
  res.json(insights[todayIndex]);
});

// ─── Mock Data ───────────────────────────────

function generateMockRiskyRepos() {
  return [
    { name: 'core-api', last_commit_by: 'alex-dev', last_commit_ago: '2 hours ago', health_score: 35, risk_level: 'HIGH' },
    { name: 'payment-service', last_commit_by: 'sarah-eng', last_commit_ago: '5 hours ago', health_score: 52, risk_level: 'MEDIUM' },
    { name: 'auth-module', last_commit_by: 'mike-ops', last_commit_ago: '1 day ago', health_score: 28, risk_level: 'HIGH' },
    { name: 'user-dashboard', last_commit_by: 'priya-sec', last_commit_ago: '3 days ago', health_score: 71, risk_level: 'LOW' },
    { name: 'ml-pipeline', last_commit_by: 'jordan-ml', last_commit_ago: '1 week ago', health_score: 64, risk_level: 'MEDIUM' },
  ];
}

module.exports = router;
