var pessoas = 0;
var alturas = [];
var sexoF = 0;
var sexoM = 0;
var alturaF = 0;
var alturaM = 0;
var sexo;
var altura;

    for (var i = 1; i <= 5; i++) {
        sexo = prompt("Sexo (F ou M):");
        altura = parseInt(prompt("Altura["+i+"]:"));
       
        if (sexo === 'F') {
            alturaF += altura;
            sexoF++;
        } else if (sexo === 'M') {
            alturaM += altura;
            sexoM++;
        }
       
    }
    document.write('Total de mulheres: ' + sexoF)
    document.write('Total de homens: ' + sexoM)


        // var maiorF = Math.max.apply(null, alturaF);
        // var maiorM = Math.max.apply(null, alturaM);

        // if(maiorF > maiorM) {
        //     alert('A maior altura é ' + maiorF + ' e de uma mulher')
        // } else {
        //     alert('A maior altura é ' + maiorM + ' e de um homem')
        // }

        

        

