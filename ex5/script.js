var pessoas = 0;
var sexoF = 0;
var sexoM = 0;
var alturaF = 0;
var alturaM = 0;
var altura = [];
var sexo = [];

function alturaSexo() {
    while (pessoas < 5) {
        sexo = prompt('Sexo (F ou M): ');
        altura = parseInt(prompt('Altura: '));

        if (sexo === 'F') {
            altura.push(altura);
            alturaF += altura;
            sexoF++;
        } else if (sexo === 'M') {
            altura.push(altura);
            alturaM += altura;
            sexoM++;
        }
    }
    pessoas++;
}

document.write('Total de mulheres: ' + sexoF)
document.write('Total de homens: ' + sexoM)

function maiorAltura() {
    var maiorF = Math.max.apply(null, alturaF);
    var maiorM = Math.max.apply(null, alturaM);

    if(maiorF > maiorM) {
        document.write('A maior altura é ' + maiorF + ' e de uma mulher')
    } else {
        document.write('A maior altura é ' + maiorM + ' e de um homem')
    }
}