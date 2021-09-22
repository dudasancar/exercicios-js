function getData() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var today =  'Hoje é ' + day + '.' + month + '.' + year;
    document.getElementById('data').innerHTML = today;
}

function nextMonth() {
    var date2 = new Date();
    var day = date2.getDate();
    var month = date2.getMonth() + 2;
    var year = date2.getFullYear();

    var today =  day + '.' + month + '.' + year;
    document.getElementById('data').innerHTML = today;
}