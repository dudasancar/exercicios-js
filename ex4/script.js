var idades = [];
   
function idade() {
    var valor = document.querySelector(".idade").value;
    idades.push(valor);
    var maioresIdade = 0;
    var menoresIdade = 0;
    for (var i = 0; i < idades.length; i++) {
        if(idades[i] >= 18) {
            maioresIdade += 1;
        } else {
            menoresIdade += 1;
        }
    }
    document.querySelector('.texto_idades').innerHTML = 'Idades: [' + idades + ']';
    document.querySelector('.maior').innerHTML = 'Maiores de idade: ' + maioresIdade;
    document.querySelector('.menor').innerHTML = 'Menores de idade: ' + menoresIdade;

}