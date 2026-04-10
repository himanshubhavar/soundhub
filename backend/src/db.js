// ──────────────────────────────────────────────
// GitMax Backend — Database Layer (SQLite)
// ──────────────────────────────────────────────
const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'gitmax.db');

let db;

function getDb() {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    migrate(db);
  }
  return db;
}

function migrate(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id            TEXT PRIMARY KEY,
      provider      TEXT NOT NULL,            -- 'github' | 'gitlab'
      provider_id   TEXT NOT NULL,
      username      TEXT NOT NULL,
      display_name  TEXT,
      email         TEXT,
      avatar_url    TEXT,
      access_token  TEXT,
      created_at    TEXT DEFAULT (datetime('now')),
      updated_at    TEXT DEFAULT (datetime('now')),
      UNIQUE(provider, provider_id)
    );

    CREATE TABLE IF NOT EXISTS repositories (
      id              TEXT PRIMARY KEY,
      user_id         TEXT NOT NULL,
      provider        TEXT NOT NULL,          -- 'github' | 'gitlab'
      name            TEXT NOT NULL,
      url             TEXT NOT NULL,
      health_score    REAL DEFAULT 0,
      last_analyzed   TEXT,
      version_tag     TEXT DEFAULT 'v0.0.0',
      status          TEXT DEFAULT 'connected', -- 'connected' | 'analyzing' | 'error'
      created_at      TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS blacklisted_tokens (
      token     TEXT PRIMARY KEY,
      exp       INTEGER NOT NULL
    );
  `);
}

module.exports = { getDb };
