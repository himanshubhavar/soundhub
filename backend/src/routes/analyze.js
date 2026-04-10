// ──────────────────────────────────────────────
// GitMax Backend — PR Analysis Pipeline
// ──────────────────────────────────────────────
const express = require('express');
const axios = require('axios');
const { getDb } = require('../db');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// ─── Pipeline Stage Simulators ───────────────

/**
 * Stage 1: CodeMiner — Extract file metadata, diffs, and complexity metrics
 */
async function runCodeMiner(prData) {
  const start = Date.now();
  // Simulate mining delay
  await delay(200 + Math.random() * 300);

  const files = prData.files || generateMockFiles();
  return {
    agent: 'CodeMiner',
    status: 'COMPLETED',
    duration_ms: Date.now() - start,
    data: { files },
  };
}

/**
 * Stage 2: Analyzer — Compute code quality metrics per file
 */
async function runAnalyzer(minedData) {
  const start = Date.now();
  await delay(150 + Math.random() * 250);

  const analyzedFiles = minedData.data.files.map((file) => {
    const complexity = Math.floor(Math.random() * 40) + 5;
    const commits = Math.floor(Math.random() * 50) + 1;
    return {
      ...file,
      metrics: { complexity, commits },
    };
  });

  return {
    agent: 'Analyzer',
    status: 'COMPLETED',
    duration_ms: Date.now() - start,
    data: { files: analyzedFiles },
  };
}

/**
 * Stage 3: Risk Engine — Assign risk levels and reasons per file
 */
async function runRiskEngine(analyzedData) {
  const start = Date.now();
  await delay(100 + Math.random() * 200);

  const reasons_pool = [
    'High cyclomatic complexity detected',
    'File modified in >10 recent commits — hot spot',
    'Contains authentication/security logic',
    'No test coverage found for this module',
    'Large diff size increases merge conflict probability',
    'Critical dependency chain affected',
    'Database migration detected — requires DBA review',
    'API contract change — breaking change risk',
  ];

  const recommendations_pool = [
    'Add unit tests before merging',
    'Request security team review',
    'Split into smaller PRs for safer rollout',
    'Run load tests on affected endpoints',
    'Verify backward compatibility',
    'Add integration tests for the new flow',
  ];

  const riskedFiles = analyzedData.data.files.map((file) => {
    const score = file.metrics.complexity * 1.5 + file.metrics.commits * 0.8;
    let risk_level = 'LOW';
    if (score > 50) risk_level = 'HIGH';
    else if (score > 25) risk_level = 'MEDIUM';

    const expected_cost_inr = risk_level === 'HIGH'
      ? Math.floor(Math.random() * 50000) + 20000
      : risk_level === 'MEDIUM'
        ? Math.floor(Math.random() * 15000) + 5000
        : Math.floor(Math.random() * 3000) + 500;

    const numReasons = risk_level === 'HIGH' ? 3 : risk_level === 'MEDIUM' ? 2 : 1;
    const reasons = shuffleArray(reasons_pool).slice(0, numReasons);
    const recommendation = recommendations_pool[Math.floor(Math.random() * recommendations_pool.length)];

    return {
      ...file,
      risk_level,
      expected_cost_inr,
      reasons,
      recommendation,
    };
  });

  return {
    agent: 'RiskEngine',
    status: 'COMPLETED',
    duration_ms: Date.now() - start,
    data: { files: riskedFiles },
  };
}

/**
 * Stage 4: Cost Estimator — Calculate total expected loss
 */
async function runCostEstimator(riskedData) {
  const start = Date.now();
  await delay(80 + Math.random() * 150);

  const files = riskedData.data.files;
  const totalCost = files.reduce((sum, f) => sum + f.expected_cost_inr, 0);

  const highCount = files.filter((f) => f.risk_level === 'HIGH').length;
  const overallRisk = highCount >= 2 ? 'HIGH' : highCount === 1 ? 'MEDIUM' : 'LOW';
  const confidence = Math.round((75 + Math.random() * 20) * 100) / 100;

  return {
    agent: 'CostEstimator',
    status: 'COMPLETED',
    duration_ms: Date.now() - start,
    data: {
      summary: {
        overall_risk: overallRisk,
        expected_loss_inr: totalCost,
        confidence,
      },
      files,
    },
  };
}

/**
 * Stage 5: Report Generator — Produce final structured output
 */
async function runReportGenerator(costData) {
  const start = Date.now();
  await delay(100 + Math.random() * 150);

  const { summary, files } = costData.data;

  const signals = [
    { name: 'Code Complexity', value: files.reduce((s, f) => s + f.metrics.complexity, 0) / files.length, status: summary.overall_risk === 'HIGH' ? 'CRITICAL' : 'OK' },
    { name: 'Test Coverage', value: `${Math.floor(Math.random() * 30) + 60}%`, status: 'WARNING' },
    { name: 'Security Scan', value: 'Passed', status: 'OK' },
    { name: 'Dependency Audit', value: `${Math.floor(Math.random() * 5)} issues`, status: Math.random() > 0.5 ? 'WARNING' : 'OK' },
    { name: 'Breaking Changes', value: summary.overall_risk === 'HIGH' ? 'Detected' : 'None', status: summary.overall_risk === 'HIGH' ? 'CRITICAL' : 'OK' },
  ];

  const allReasons = [...new Set(files.flatMap((f) => f.reasons))];

  const decision = summary.overall_risk === 'HIGH'
    ? 'BLOCK_MERGE'
    : summary.overall_risk === 'MEDIUM'
      ? 'MERGE_WITH_REVIEW'
      : 'SAFE_TO_MERGE';

  const rationales = {
    BLOCK_MERGE: 'Multiple high-risk files detected. Senior developer review and additional test coverage required before merging.',
    MERGE_WITH_REVIEW: 'Moderate risk detected. Code review by a domain expert is recommended before merging.',
    SAFE_TO_MERGE: 'All automated checks passed. Low risk — safe to merge with standard CI pipeline.',
  };

  const executiveSummary = `This pull request modifies ${files.length} file(s) with an overall risk assessment of ${summary.overall_risk}. ` +
    `The estimated potential cost impact is ₹${summary.expected_loss_inr.toLocaleString('en-IN')}. ` +
    `Confidence level: ${summary.confidence}%. ` +
    `Recommendation: ${decision.replace(/_/g, ' ').toLowerCase()}.`;

  return {
    agent: 'ReportGenerator',
    status: 'COMPLETED',
    duration_ms: Date.now() - start,
    data: {
      summary,
      files: files.map(({ name, risk_level, expected_cost_inr, metrics, reasons, recommendation }) => ({
        name, risk_level, expected_cost_inr, metrics, reasons, recommendation,
      })),
      signals,
      explanation: { reasons: allReasons },
      recommendation: { decision, rationale: rationales[decision] },
      executive_summary: executiveSummary,
    },
  };
}

// ─── Analysis Pipeline Route ─────────────────

/**
 * POST /api/analyze-pr
 * Body: { pr_url: string }
 * Runs the 5-stage analysis pipeline and returns the full report.
 */
router.post('/', authenticate, async (req, res) => {
  const { pr_url } = req.body;

  if (!pr_url || typeof pr_url !== 'string') {
    return res.status(400).json({ error: 'pr_url is required' });
  }

  // Parse the PR URL to extract owner/repo/pr_number
  const prMatch = pr_url.match(/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/);
  const mrMatch = pr_url.match(/gitlab\.com\/([^/]+)\/([^/]+)\/-\/merge_requests\/(\d+)/);

  let prData = { files: generateMockFiles() };
  let prMeta = {};

  if (prMatch) {
    prMeta = { provider: 'github', owner: prMatch[1], repo: prMatch[2], number: prMatch[3] };

    // Try to fetch real PR files from GitHub
    const db = getDb();
    const user = db.prepare('SELECT access_token FROM users WHERE id = ?').get(req.user.id);
    if (user && user.access_token) {
      try {
        const filesRes = await axios.get(
          `https://api.github.com/repos/${prMeta.owner}/${prMeta.repo}/pulls/${prMeta.number}/files`,
          { headers: { Authorization: `Bearer ${user.access_token}` } }
        );
        prData.files = filesRes.data.map((f) => ({
          name: f.filename,
          additions: f.additions,
          deletions: f.deletions,
          changes: f.changes,
        }));
      } catch { /* fall through to mock data */ }
    }
  } else if (mrMatch) {
    prMeta = { provider: 'gitlab', owner: mrMatch[1], repo: mrMatch[2], number: mrMatch[3] };
  } else {
    prMeta = { provider: 'unknown', url: pr_url };
  }

  // Execute the 5-stage pipeline
  const agentLogs = [];

  const stage1 = await runCodeMiner(prData);
  agentLogs.push({ agent: stage1.agent, status: stage1.status, duration_ms: stage1.duration_ms });

  const stage2 = await runAnalyzer(stage1);
  agentLogs.push({ agent: stage2.agent, status: stage2.status, duration_ms: stage2.duration_ms });

  const stage3 = await runRiskEngine(stage2);
  agentLogs.push({ agent: stage3.agent, status: stage3.status, duration_ms: stage3.duration_ms });

  const stage4 = await runCostEstimator(stage3);
  agentLogs.push({ agent: stage4.agent, status: stage4.status, duration_ms: stage4.duration_ms });

  const stage5 = await runReportGenerator(stage4);
  agentLogs.push({ agent: stage5.agent, status: stage5.status, duration_ms: stage5.duration_ms });

  // Final response
  res.json({
    ...stage5.data,
    agent_logs: agentLogs,
    _meta: prMeta,
  });
});

// ─── Utilities ───────────────────────────────

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateMockFiles() {
  const fileNames = [
    'src/auth/oauth.service.ts',
    'src/api/payment.controller.ts',
    'src/core/risk-engine.ts',
    'src/db/migrations/20260410.sql',
    'src/utils/helpers.ts',
    'src/middleware/rate-limiter.ts',
    'tests/auth.spec.ts',
    'config/security.yaml',
  ];

  const count = Math.floor(Math.random() * 5) + 3;
  return shuffleArray(fileNames).slice(0, count).map((name) => ({
    name,
    additions: Math.floor(Math.random() * 200) + 5,
    deletions: Math.floor(Math.random() * 80) + 1,
    changes: Math.floor(Math.random() * 250) + 10,
  }));
}

module.exports = router;
