import express from 'express';
import { login } from '../services/AuthService.js';

const router = express.Router();

router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const token = login(email, senha);
  if (!token) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  res.json({ token });
});

export default router;