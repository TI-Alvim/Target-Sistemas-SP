// Dados de faturamento diário em formato JSON
const faturamentoDiario = [
    { "dia": 1, "valor": 1200 },
    { "dia": 2, "valor": 2300 },
    { "dia": 3, "valor": 2100 },
    { "dia": 4, "valor": 0 },
    { "dia": 5, "valor": 0 },
    { "dia": 6, "valor": 1950 },
    { "dia": 7, "valor": 1800 },
    { "dia": 8, "valor": 2500 },
    { "dia": 9, "valor": 1600 },
    { "dia": 10, "valor": 0 },
    { "dia": 11, "valor": 3000 },
    { "dia": 12, "valor": 0 },
    { "dia": 13, "valor": 3200 },
    { "dia": 14, "valor": 2800 },
    { "dia": 15, "valor": 0 },
    { "dia": 16, "valor": 4000 },
    { "dia": 17, "valor": 3500 },
    { "dia": 18, "valor": 0 },
    { "dia": 19, "valor": 2000 },
    { "dia": 20, "valor": 1900 },
    { "dia": 21, "valor": 2300 },
    { "dia": 22, "valor": 1800 },
    { "dia": 23, "valor": 2500 },
    { "dia": 24, "valor": 0 },
    { "dia": 25, "valor": 0 },
    { "dia": 26, "valor": 0 },
    { "dia": 27, "valor": 3000 },
    { "dia": 28, "valor": 2200 },
    { "dia": 29, "valor": 0 },
    { "dia": 30, "valor": 3700 }
];

// Filtra dias com faturamento maior que 0
const faturamentoValido = faturamentoDiario
    .map(dia => dia.valor)
    .filter(valor => valor > 0);

// Calcula o menor valor de faturamento
const menorFaturamento = Math.min(...faturamentoValido);

// Calcula o maior valor de faturamento
const maiorFaturamento = Math.max(...faturamentoValido);

// Calcula a média de faturamento mensal
const mediaMensal = faturamentoValido.reduce((acc, valor) => acc + valor, 0) / faturamentoValido.length;

// Contar os dias em que o faturamento foi superior à média mensal
const diasAcimaDaMedia = faturamentoValido.filter(valor => valor > mediaMensal).length;

// Exibi os resultados na página
document.getElementById('resultado').innerHTML = `
    <p>Menor faturamento do mês: ${menorFaturamento}</p>
    <p>Maior faturamento do mês: ${maiorFaturamento}</p>
    <p>Dias com faturamento acima da média: ${diasAcimaDaMedia}</p>
`;