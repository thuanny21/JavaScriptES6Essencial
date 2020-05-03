//ELSE IF

/**
 if (condicao) {
     //code
 } else if (condicao) {
     //code
 }
 */

 const array = [2, 3, 4, 5, 6, 8, 10, 15];

 console.log('\nelse if');
 array.forEach(item => {
     if (item % 2 === 0) {
         console.log(`O número ${item} é divisivel por 2.`);
     }else if(item % 3 === 0) {
         console.log(`O número ${item} é divisível por 3`);
     } else if(item % 5 === 0) {
         console.log(`O numero ${item} é divisivel por 5`);
     }
 });ç