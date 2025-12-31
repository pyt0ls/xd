import axios from 'axios';
import { config } from '../config.js';

export async function consultarDark(tipo, dado) {
  // Monta a URL correta: BASE_API + /api/consulta/{tipo}
  const url = `${config.BASE_API}/api/consulta/${tipo}`;

  const response = await axios.get(url, {
    params: {
      dados: dado,         // parâmetro correto para a API externa
      apikey: config.API_KEY
    }
  });

  return response.data;
}