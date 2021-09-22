
function separar() {
    var calendario = document.querySelector('.calendario').value;
    calendario = new Date();
    var dia = calendario.getDate();
    var mes = calendario.getMonth() + 1;
    var ano = calendario.getFullYear();

    document.querySelector('.dia').innerHTML = 'Dia: ' + dia;
    document.querySelector('.mes').innerHTML = 'Mês: ' + mes;
    document.querySelector('.ano').innerHTML = 'Ano: ' + ano;
}