function escrever() {
    var res = '';
    for (var i = 0; i < 11; i++) {
        res += [i]
    }
    document.getElementById('resultado').innerHTML = res;

    var res2 = '';
    for (var i = 0; i < 21; i++) {
        if(i % 2 === 0) {
            res2 += [i]
        }
        document.getElementById('resultado').innerHTML = res2;
    }
}