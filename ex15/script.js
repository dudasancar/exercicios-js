var i
var altura
var sexo
var maioralt = 0
var menoralt = 0
var feminino = 0
var masculino = 0
var mediaF = 0
var contagemF = 0
var contagemM = 0

for(i = 1 ;i <= 15; i++) {        
    altura = parseInt(prompt("Informe sua altura["+i+"]:"));
    sexo = prompt("Sexo: M ou F:");


    if(i == 1) {
        menoralt = altura;
    } if(altura > maioralt) { 
        maioralt = altura;
    } if(altura < menoralt) { 
        menoralt = altura;
    } if(sexo == 'F') {
        feminino += altura;
        contagemF++;
    } else if(sexo == 'M') {
        masculino += altura;
        contagemM++;
    }
}
mediaF = feminino/contagemF;
alert("A maior altura é: " + maioralt); 
alert("A menor altura é: " + menoralt);
alert("A média das mulheres é: " + mediaF);
alert("O número de homens é: " + contagemM);