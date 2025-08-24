import functions from 'firebase-functions';
import admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Initialize Admin SDK once
try {
  admin.initializeApp();
} catch (e) {
  // no-op if already initialized
}

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Basic in-memory rate limiter (per instance)
const rateLimiter = new RateLimiterMemory({ points: 20, duration: 60 }); // 20 req/min/IP

app.post('/saveQuizResult', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.ip || 'unknown';
  try {
    await rateLimiter.consume(ip);
  } catch {
    return res.status(429).json({ error: 'Too Many Requests' });
  }

  const { userId, quizType, itemId, correct, points = 0, timestamp } = req.body || {};
  if (!userId || !quizType || typeof itemId === 'undefined' || typeof correct !== 'boolean') {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  try {
    const db = admin.firestore();
    const now = timestamp ? new Date(timestamp) : new Date();
    await db
      .collection('users')
      .doc(userId)
      .collection('results')
      .add({ quizType, itemId, correct, points, createdAt: admin.firestore.Timestamp.fromDate(now) });
    return res.json({ ok: true });
  } catch (err) {
    console.error('saveQuizResult failed', err);
    return res.status(500).json({ error: 'Internal error' });
  }
});

export const api = functions.https.onRequest(app);
