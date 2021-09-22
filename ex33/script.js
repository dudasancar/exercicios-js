function getData() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var today =  'Hoje é ' + day + '.' + month + '.' + year;
    document.getElementById('data').innerHTML = today;
}