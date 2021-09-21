function limpar() {
    var cpf = document.querySelector('.cpfPoint').value;
    var cpfSemPonto = cpf.replace('.', '').replace('.', '').replace('-', '');
    document.querySelector('.cpfFormatado').innerHTML = cpfSemPonto;
}