//Criar um array

const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);


const arr3 = Array.of(1, 2, 3);

//Array.from: Cria uma nova instancia de array a partir de um parametro array-like ou iterable object
const divs = document.querySelectorAll('div');
const arr = Array.from(divs);

//Push: Adicionar um ou mais elementos no final do array e retorna o tamanho do novo array
const arr4 = ['banana', 'melancia', 'abacate'];
const arrLenght = arr.push('acerola');
console.log(arrLenght) //4

console.log(arr4); //['banana', 'melancia', 'abacate', 'acerola'];

//Pop: Remove o último elemento de um array e retorna o elemento removido
const arr5 = ['banana', 'melancia', 'abacate'];
const removeItem = arr.pop();

console.log(removeItem) // 'abacate'
console.log(arr5); //['banana', 'melancia'];

//Unshift: Adicionar um ou mais elementos no início do array e retorna o tamanho do novo array
const arr6 = ['banana', 'melancia', 'abacate'];
const arrLenght = arr.unshift('acerola');
console.log(arrLenght) //4
console.log(arr6); //['acerola', 'banana', 'melancia', 'abacate'];

//shift: Remove o primeiro elemento de um array e retorna o elemento removido
const arr7 = ['banana', 'melancia', 'abacate'];
const removeItem = arr.shift();
console.log(removeItem) //'banana'
console.log(arr7);// ['melancia', 'abacate'];

//concat : Concatena um ou mais arrays retornando um novo array
const arr8 = [1, 2, 3];
const arr9 = [4, 5, 6];

const novoArr = arr8.concat(arr9);

console.log(arr8);//(3) [1, 2, 3]
console.log(arr9);//(3) [4, 5, 6]
console.log(novoArr);//(6) [1, 2, 3, 4, 5, 6]

//slice : Retorna um novo array "fatiando" o array de acordo com ínicio e fim
const arr10 = [1, 2, 3, 4, 5];
arr10.slice(0, 2); // [1, 2]
arr10.slice(2); // [3, 4, 5]
arr10.slice(-1); // [5]
arr.slice(-3); // [3, 4, 5]

//splice : Altera um array adicionando novos elementos enquanto remove elementos antigos
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(2) //[3, 4, 5]
console.log(arr11); // [1, 2]
arr.splice(0, 0, 'first'); //[]
console.log(arr); //['first', 1, 2]



