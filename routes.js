const express = require('express');
const router = express.Router();
const { classificacoesIMC, dicasSaude } = require('./banco');

// Rota: Calcular IMC
router.get('/imc', (req, res) => {
  const peso = parseFloat(req.query.peso);
  const altura = parseFloat(req.query.altura);

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    return res.status(400).json({ erro: 'Informe peso e altura válidos.' });
  }

  const imc = peso / (altura * altura);
  let classificacao = '';

  if (imc < 18.5) classificacao = 'Abaixo do peso';
  else if (imc < 24.9) classificacao = 'Peso normal';
  else if (imc < 29.9) classificacao = 'Sobrepeso';
  else if (imc < 34.9) classificacao = 'Obesidade grau 1';
  else if (imc < 39.9) classificacao = 'Obesidade grau 2';
  else classificacao = 'Obesidade grau 3';

  res.json({
    imc: imc.toFixed(2),
    classificacao
  });
});

// Rota: Classificações do IMC
router.get('/classificacao', (req, res) => {
  res.json(classificacoesIMC);
});

// Rota: Dicas de saúde
router.get('/dicas', (req, res) => {
  res.json(dicasSaude);
});

module.exports = router;