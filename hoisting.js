//levantar ou supender algo. 

//Hoisting de variaveis

function fn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

// Hoisting com função

function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();