function idade() {
    var idade1 = document.querySelector(".idade1").value;
    var idade2 = document.querySelector(".idade2").value;
    var idade3 = document.querySelector(".idade3").value;
    var idade4 = document.querySelector(".idade4").value;
    var idade5 = document.querySelector(".idade5").value;

    if(idade1 >= 18) {
        var maior1 = idade1;
    } else {
        var menor1 = idade1;
    }
    
    if(idade2 >= 18) {
        var maior2 = idade2;
    } else {
        var menor2 = idade2;
    }

    if(idade3 >= 18) {
        var maior3 = idade3;
    } else {
        var menor3 = idade3;
    }

    if(idade4 >= 18) {
        var maior4 = idade4;
    } else {
        var menor4 = idade4;
    }

    if(idade5 >= 18) {
        var maior5 = idade5;
    } else {
        var menor5 = idade5;
    }

    var maiores = [];
    var menores = [];
    maiores.push(maior1, maior2, maior3, maior4, maior5);
    menores.push(menor1, menor2, menor3, menor4, menor5);

    console.log()

    document.querySelector('.maior').innerHTML = 'Maiores de idade: ' + maiores;
    document.querySelector('.menor').innerHTML = 'Menores de idade: ' + menores.length;
}