function pontuar() {
    var cpf = document.querySelector('.cpf').value;
    var cpfPontuado = cpf.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4',
    );
    document.querySelector('.cpfFormatado').innerHTML = cpfPontuado;
}