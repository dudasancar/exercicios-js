function adicionar() {
    var num = document.getElementById('input').value;
    var lista = document.getElementById('lista');
    var li = document.createElement('li');

    if (num % 2 === 0) {
        var destaque = document.createElement('strong');
        destaque.appendChild(document.createTextNode(num))
        li.appendChild(destaque);
    } else {
        li.appendChild(document.createTextNode(num));
    }
    lista.appendChild(li);
}