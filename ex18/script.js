var i;
var idade;
var peso;
var sexo;
var quantM = 0;
var quantF = 0;
var mediaIdadeM;
var idadeM = 0;
var pesoF = 0;
var mediaPesoF;

for(i = 1; i <= 10; i++) {
    idade = parseInt(prompt("Sua idade["+i+"]:"));
    peso = parseInt(prompt("Seu peso["+i+"]:"));
    sexo = prompt("Sexo M ou F:");

    if(sexo == 'M') {                    
        quantM++;
        idadeM += idade;
    } if (sexo == 'F') {
        quantF++;
        pesoF += peso;
    }
}

mediaIdadeM = idadeM/quantM;
mediaPesoF = pesoF/quantF;

alert("Total de homens: " + quantM);
alert("Total de mulheres: " + quantF);
alert("Média das idades dos homens: " + mediaIdadeM);
alert("Média dos pesos das mulheres: " + mediaPesoF);