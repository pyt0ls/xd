import express from 'express';
import cors from 'cors';
import { consultarDark } from './services/DarkApi.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/:tipo/:dado', async (req, res) => {
  const { tipo, dado } = req.params;

  try {
    const resultado = await consultarDark(tipo, dado);
    res.json({ ok: true, resultado });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      ok: false,
      error: 'Erro ao consultar API'
    });
  }
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`🔥 Backend rodando na porta ${PORT}`);
});
