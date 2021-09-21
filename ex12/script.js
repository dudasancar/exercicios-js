function mensagem() {
    var numero = document.querySelector('.input').value;

    if (numero < 10) {
        alert('insuficiente');
    } else if (numero < 14) {
        alert('bom');
    } else if (numero >= 14) {
        alert('muito bom');
    }
}