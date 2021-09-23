var pessoas = 0;
var sexoF = 0;
var sexoM = 0;
var sexo;
var altura = 0;
var maiorAltura = 0;
var sexoAltura;


    for (var i = 1; i <= 5; i++) {
        sexo = prompt("Sexo (F ou M):");
        altura = parseInt(prompt("Altura["+i+"]:"));
        
        if (sexo === 'F') {
            sexoF++;
            
        } else if (sexo === 'M') {
            sexoM++;
        } else {
            alert('Ops, preencha corretamente')
        }


        if (maiorAltura < altura) {
            maiorAltura = altura
            sexoAltura = sexo
        }


    }

document.write('Total de mulheres: ' + sexoF)
document.write('Total de homens: ' + sexoM)
document.write('A maior altura é ' + maiorAltura + ' e é '+sexoAltura)


        

        

