function limpar() {
    var cpf = document.getElementById('cpfPoint').value;
    var cpfSemPonto = cpf.replace('.', '').replace('.', '').replace('-', '');
    document.getElementById('cpfFormatado').innerHTML = cpfSemPonto;
}