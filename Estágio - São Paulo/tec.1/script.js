function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    for(K = 0; K <= INDICE; K++) {
        SOMA = SOMA + K;
    }

    document.getElementById('resultado').textContent = `SOMA = ${SOMA}`;
}

// Executa a função calcularSoma quando a página é carregada
window.onload = calcularSoma;