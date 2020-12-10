/*============================================================
 * map() -> Não altera a quantidade de componentes do array,
 * percorre cada elemento e executa uma função.
 * ===========================================================
 */


/* Dobrar Valores
================================================================ */

const numbers = [ 1, 3, 4, 5, 7, 44, 33, 21, 53]

const doubledNumbers = numbers.map( num => num * 2)
// console.log( doubledNumbers )

/* Farenheit para Celsius
================================================================ */

const fahrenheit = [0, 32, 45, 50, 75, 80, 120 ]

const celsius = fahrenheit.map( function( elem ) {  
    return Math.round( (elem - 32 ) * 5/9 )
})
 //farenheit.map(elem => Math.round( elem - 32 ) * 5/9 ) 

// console.log( celsius )

/* Números pares
================================================================ */

const pares = numbers.map(par => par % 2 == 0)
// console.log(pares)




/*============================================================
 * filter() -> Remove elementos do array com base em 
            determinadas condições.
 * ===========================================================
 */

 /* Remover números duplicados
================================================================ */

const yetAnotherArray = [ 1, 2, 3, 6, 7, 18, 33, 2, 3, 4, 55, 6, 7, 8, 2, 44, 5 ]

const uniqueArray = yetAnotherArray.filter( (elemento, index, arrayOriginal) => arrayOriginal.indexOf( elemento ) === index )

console.log(uniqueArray)