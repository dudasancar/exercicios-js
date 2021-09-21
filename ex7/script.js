
function separar() {
    var calendario = document.querySelector('.calendario').value;

    var dia = calendario.getDate();
    var mes = calendario.getMonth() + 1;
    var ano = calendario.getFullYear();

    document.querySelector('.dia').innerHTML = dia;
    document.querySelector('.mes').innerHTML = mes;
    document.querySelector('.ano').innerHTML = ano;
}