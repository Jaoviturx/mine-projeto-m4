const classificacoesIMC = [
  { faixa: 'Abaixo de 18.5', classificacao: 'Abaixo do peso' },
  { faixa: '18.5 – 24.9', classificacao: 'Peso normal' },
  { faixa: '25 – 29.9', classificacao: 'Sobrepeso' },
  { faixa: '30 – 34.9', classificacao: 'Obesidade grau 1' },
  { faixa: '35 – 39.9', classificacao: 'Obesidade grau 2' },
  { faixa: '40 ou mais', classificacao: 'Obesidade grau 3' }
];

const dicasSaude = [
  'Beba bastante água ao longo do dia.',
  'Pratique exercícios físicos regularmente.',
  'Tenha uma alimentação equilibrada.',
  'Evite alimentos ultraprocessados.',
  'Durma pelo menos 7 horas por noite.',
  'Cuide da saúde mental com pausas e lazer.'
];

module.exports = { classificacoesIMC, dicasSaude };