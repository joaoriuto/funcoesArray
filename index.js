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

// console.log(uniqueArray)


/*============================================================
 * reduce() -> Encontrar valor comulativo concatenado com base
            nos elementos do array.
 * ===========================================================
 */

 /* Lançamento de foguetes (Total de lançamentos)
================================================================ */

const rockets = [
    { country: "Russia", launches: 32 },
    { country: "US", launches: 101 },
    { country: "China", launches: 16 },
    { country: "Europe", launches: 7 },
    { country: "India", launches: 4 },
    { country: "Japan", launches: 66 }
]

const totalLaunches = rockets.reduce( (valorAnterior, valorAtual) => valorAnterior + valorAtual.launches, 0 )
// console.log(totalLaunches)

/*============================================================
 * every() -> É utilizando quando se quer testar todos 
 os elementos de um array.
    ** O método filter retorna outro array e o every, boolean.
 * ===========================================================
 */

 /* Verificar se os elementos de um array são maiores que 10
================================================================ */

const arrayAleatorio = [  11, 54, 32, 56 ,77 ,234, 234, 123, 42 ]

const allAbove10 = arrayAleatorio.every( elemento => elemento > 10 )
// console.log(allAbove10)

 /* Verificar se a pessoa tem 18 anos ou mais
================================================================ */

const tchurma = [
    { id: 12, name: "Frederico", age: 24 },
    { id: 48, name: "Francisca", age: 18 },
    { id: 77, name: "Presunto", age: 48 },
    { id: 89, name: "AgaMenon", age: 48 }
]

// console.log( tchurma.every( p => p.age >= 18 ))

const itensNaMesa = [
    { id: 1, item: "Controle", quant: 1 },
    { id: 2, item: "Caderno", quant: 2 }
]

const exists = itensNaMesa.every(p => p.id > 0 )
// console.log(exists)

/*============================================================
 * some() -> Utilizado para saber se no mínimo um item 
        do array passa no teste. (boolean)
 * ===========================================================
 */

 /* Verificar se há ao menos um número primo.
================================================================ */

function isPrime( value ) {
    for ( let i = 2; i < value; i++ ){
        if ( value % i === 0 ) {
            return false
        }
    }

    return value > 1
}

// console.log( arrayAleatorio.some( isPrime ))

/* Verificar se há ao menos um piloto.
================================================================ */

const team = [
    { id: 12, name: "Tropper Harley", pilot: true },
    { id: 22, name: "Ramadda Thompson", pilot: true },
    { id: 32, name: "Alexa Balalaika", pilot: false },
    { id: 42, name: "Galax Hitchiker", pilor: true }
]

// console.log( team.some( person => person.pilot ))


/*============================================================
 * find() -> Procurar ou verificar por valor no array e 
 retorna o primeiro  resultado
 * ===========================================================
 */

 /* Procurar Pizzas
================================================================ */

const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita"
]

const foundPizza = pizzas.find( pizza => pizza.startsWith( "m" ))

//console.log( foundPizza ) 
//Retorna a primeira pizza e encerra a busca.

/* Procurar Frutas
================================================================ */

const fruits = [
    { name: "jaca", quantity: 2 },
    { name: "banana", quantity: 3 },
    { name: "cereja", quantity: 5 },
    { name: "apple", quantity: 42 }
]

const procura = "apple"
const foundFruit = fruits.find( fruit => fruit.name === procura )

console.log( foundFruit )
