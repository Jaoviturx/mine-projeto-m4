const express = require('express');
const router = express.Router();
const { classificacoesIMC, dicasSaude } = require('./banco');

// 1. FUNÇÃO DE CLASSIFICAÇÃO (coloque logo após os imports)
function obterClassificacaoIMC(imc) {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 24.9) return 'Peso normal';
  if (imc < 29.9) return 'Sobrepeso';
  if (imc < 34.9) return 'Obesidade grau 1';
  if (imc < 39.9) return 'Obesidade grau 2';
  return 'Obesidade grau 3';
}

// 2. ROTA IMC (com valores predefinidos se não informar parâmetros)
router.get('/imc', (req, res) => {
  // Se não informar peso e altura, usa valores predefinidos
  const peso = parseFloat(req.query.peso) || 70; // peso padrão: 70kg
  const altura = parseFloat(req.query.altura) || 1.75; // altura padrão: 1.75m

  const imc = peso / (altura * altura);
  const classificacao = obterClassificacaoIMC(imc);

  res.json({
    peso: peso,
    altura: altura,
    imc: parseFloat(imc.toFixed(2)),
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