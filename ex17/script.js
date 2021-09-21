var i;
var num;
var par = 0;
var impar = 0;            

for(i = 1 ;i <= 10; i++) {        
    num = parseInt(prompt("Informe um número["+i+"]:")); 

    if(num %2 == 0) { 
        par += num; 
    } else { 
        impar += num;
    }
}

alert("A soma dos números pares é: " + par); 