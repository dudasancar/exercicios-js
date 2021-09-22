function pontuar() {
    var cpf = document.getElementById('cpf').value;
    var cpfPontuado = cpf.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})/,
        '$1.$2.$3-$4',
    );
    document.getElementById('cpfFormatado').innerHTML = cpfPontuado;
}