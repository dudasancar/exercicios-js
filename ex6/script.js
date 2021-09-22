function inverter() {
    var nome1 = document.querySelector('.nome1').value;
    var nome2 = document.querySelector('.nome2').value;
    var nome3 = document.querySelector('.nome3').value;
    var nome4 = document.querySelector('.nome4').value;
    var nome5 = document.querySelector('.nome5').value;
    var nome6 = document.querySelector('.nome6').value;
    var inverterNomes = [];

    inverterNomes.push(nome1, nome2, nome3, nome4, nome5, nome6);

    document.querySelector('.nomesInvertidos').innerHTML = inverterNomes.reverse();
}