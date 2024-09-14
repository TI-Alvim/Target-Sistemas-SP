// Dados de faturamento por estado
const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o valor total do faturamento
const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

// Obte o elemento da lista onde os resultados serão exibidos
const listaResultados = document.getElementById('resultados');

// Calcula e exibir o percentual de cada estado
for (const [estado, valor] of Object.entries(faturamentoEstados)) {
    const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
    listaResultados.innerHTML += `<li>${estado}: ${percentual}%</li>`;
}