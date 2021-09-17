function maiorNumero() {
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;
    var n3 = document.querySelector(".n3").value;
    var n4 = document.querySelector(".n4").value;
    var n5 = document.querySelector(".n5").value;

    var maior = Math.max(n1, n2, n3, n4, n5);

    document.querySelector('.maior').innerHTML = maior;
}