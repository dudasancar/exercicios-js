function calcularMedia() {
    var n1 = document.querySelector('.n1').value;
    var n2 = document.querySelector('.n2').value;
    var n3 = document.querySelector('.n3').value;

    var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
    document.querySelector('.media').innerHTML = media; 
}