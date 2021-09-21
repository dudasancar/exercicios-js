function acender() {
    var lampada = document.querySelector('.apagada').src;
    var acesa = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
    var apagada = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';

    if(lampada === acesa) {
        document.querySelector('.apagada').src = apagada;
    } else {
        document.querySelector('.apagada').src = acesa;
    }
    document.querySelector('.apagada').addEventListener('click');
}