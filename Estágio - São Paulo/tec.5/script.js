function invertString() {
    // Obtém o valor do campo de entrada
    var input = document.getElementById('inputString').value;
    var inverted = '';

    // Inverte a string manualmente
    for (var i = input.length - 1; i >= 0; i--) {
        inverted += input[i];
    }

    // Exibe o resultado
    document.getElementById('result').textContent = 'String invertida: ' + inverted;
}