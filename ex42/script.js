function adicionar() {
    var item = document.getElementById('input').value;
    var lista = document.getElementById('lista');
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(item));
    lista.appendChild(li);
}