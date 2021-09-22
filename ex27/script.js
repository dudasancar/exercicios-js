function maioridade() {
    var ano = document.querySelector('.input').value;
    if(ano >= 2003) {
        document.querySelector('.maioridade').innerHTML = "Você é maior de idade";
    } else {
        document.querySelector('.maioridade').innerHTML = "Você é menor de idade";
    }
}