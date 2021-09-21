var i;
var idade;
var opiniao;
var idadeOtimo = 0;
var contIdadeOtimo = 0;
var mediaIdadeOtimo;
var regular = 0;
var contRegular = 0;
var bom = 0; 
var contBom = 0;
var porcentagemBom;

for(i = 1; i <= 15; i++) {
    idade = parseInt(prompt("Sua idade["+i+"]:"));
    opiniao = prompt("Sua opnião em relação ao filme: ótimo - 3, bom - 2, regular - 1:");

    if(opiniao == 3) {
        idadeOtimo += idade;
        contIdadeOtimo++;
    } if(opiniao == 1) {
        regular += opiniao;
        contRegular++;
    } if(opiniao == 2) {
        bom += opiniao;
        contBom++;
    }
} mediaIdadeOtimo = idadeOtimo/contIdadeOtimo;

prctbom = (contquantbom*100)/15;
alert("Média das idades das pessoas que responderam ótimo: " + mediaIdadeOtimo);
alert("Quantidade de pessoas que responderam regular é: " + contRegular);
alert("Porcentagem de pessoas que responderam bom: " + porcentagemBom);