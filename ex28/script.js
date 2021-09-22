function escrever() {

    // REPETIÇÃO 1X

    //document.getElementById('resultado').innerHTML = "Repetição";

    // REPETIÇÃO 2X

    // var res = [];
    // for (var i =0; i < 2; i++) {
    //     res += "Repetição"
    // }
    // document.getElementById('resultado').innerHTML = res;

    // REPETIÇÃO 20X FOR

    // var res = [];
    // for (var i = 0; i < 20; i++) {
    //     res += "Repetição"
    // }
    // document.getElementById('resultado').innerHTML = res;

    // REPETIÇÃO 5X FOREACH

    // var res = [1, 2, 3, 4, 5];
    // res.forEach((item, index) => {
    //     if(item === 1) {
    //         res[index] = "Repetição"
    //     } else if (item === 2) {
    //         res[index] = "Repetição"
    //     } else if (item === 3) {
    //         res[index] = "Repetição"
    //     } else if (item === 4) {
    //         res[index] = "Repetição"
    //     } else if (item === 5) {
    //         res[index] = "Repetição"
    //     }
    // })
    // document.getElementById('resultado').innerHTML = res;

    // REPETIÇÃO 5X WHILE

    var res = '';
    var i = 0;
    while (i < 5) {
        res += "Repetição"
        i++
    }
    document.getElementById('resultado').innerHTML = res;
}