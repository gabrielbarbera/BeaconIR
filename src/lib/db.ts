import { Pool } from 'pg';

// Database connection pool
let pool: Pool | null = null;

export function getDb() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    
    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    pool = new Pool({
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    });
  }

  return pool;
}

// Helper function to execute queries
export async function query(text: string, params?: any[]) {
  const db = getDb();
  const result = await db.query(text, params);
  return result;
}

// Close connection pool
export async function closeDb() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

