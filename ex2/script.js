function numeroQuadrado() {
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;
    var n3 = document.querySelector(".n3").value;
    var n4 = document.querySelector(".n4").value;
    var n5 = document.querySelector(".n5").value;

    var quadradoN1 = Math.pow(n1, 2);
    var quadradoN2 = Math.pow(n2, 2);
    var quadradoN3 = Math.pow(n3, 2);
    var quadradoN4 = Math.pow(n4, 2);
    var quadradoN5 = Math.pow(n5, 2);

    document.querySelector('.quadrado1').innerHTML = quadradoN1;
    document.querySelector('.quadrado2').innerHTML = quadradoN2;
    document.querySelector('.quadrado3').innerHTML = quadradoN3;
    document.querySelector('.quadrado4').innerHTML = quadradoN4;
    document.querySelector('.quadrado5').innerHTML = quadradoN5;
}