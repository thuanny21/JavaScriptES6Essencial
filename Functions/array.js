const users = ['Thuanny', 'Henrique', 'Marcilea'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Thuanny',
        age: 30,
        gender: gender.WOMAN
    },
    {
        name: 'Henrique',
        age: 58,
        gender: gender.MAN
    },
    {
        name: 'Marcilea',
        age: 58,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//Verificar se é array
console.log('A variavel persons é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach(person => {
    console.log(`Name: ${person.name}`);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
})

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

//Juntando operações
const totalEventAges = persons
.filter(person => person.age % 2 === 0)
.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEventAges);