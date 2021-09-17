function idade() {
    var idade1 = document.querySelector(".n1").value;
    var idade2 = document.querySelector(".n2").value;
    var idade3 = document.querySelector(".n3").value;
    var idade4 = document.querySelector(".n4").value;
    var idade5 = document.querySelector(".n5").value;

    if(idade1 >= 18) {
        var maior1 = idade1;
    } else {
        var menor1 = idade1;
    }
    if(idade1 >= 18) {
        var maior2 = idade2;
    } else {
        var menor2 = idade2;
    }
    if(idade1 >= 18) {
        var maior3 = idade3;
    } else {
        var menor3 = idade3;
    }
    if(idade1 >= 18) {
        var maior4 = idade4;
    } else {
        var menor4 = idade4;
    }
    if(idade1 >= 18) {
        var maior5 = idade5;
    } else {
        var menor5 = idade5;
    }

    var maiores = maiores.push(maior1, maior2, maior3, maior4, maior5);
    var menores = menores.push(menor1, menor2, menor3, menor4, menor5);

    var maioresResultado = maiores.lenght;
    var menoresResultado = menores.lenght;

    document.querySelector('.maior').innerHTML = maioresResultado;
    document.querySelector('.menor').innerHTML = menoresResultado;
}