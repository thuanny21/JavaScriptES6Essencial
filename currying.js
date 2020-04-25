//É a tecnica de transformar a função em n parametros em apenas uma função que recebe um parametro
//e para cada parametro vai retornando uma nova função

function soma(a) {
    return function(b){
        return a + b;
    }    
}

const soma2 = soma(2);

soma2(2);
soma2(3);
soma2(4);
soma2(5);