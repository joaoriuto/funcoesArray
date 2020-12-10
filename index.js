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

console.log( celsius )