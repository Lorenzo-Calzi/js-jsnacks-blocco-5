/* SNACK 1: */
// 1. Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// 2. Calcola quanto pesano tutte le zucchine.

var zucchina = [
    {
        nome: 'Zucchina lunga fiorentina',
        peso: 5,
        lunghezza: 10
    },
    {
        nome: 'Zucchino siciliano',
        peso: 3,
        lunghezza: 7
    },
    {
        nome: 'Zucchina bianca triestina',
        peso: 4,
        lunghezza: 5
    },
    {
        nome: 'Zucchina rigata pugliese',
        peso: 9,
        lunghezza: 4
    },
    {
        nome: 'Zucchino tondo di Firenze',
        peso: 2,
        lunghezza: 3
    },
    {
        nome: 'Zucchina pâtisson',
        peso: 10,
        lunghezza: 12
    },
    {
        nome: 'Zucchino giallo',
        peso: 6,
        lunghezza: 5
    },
    {
        nome: 'Zucchina Crookneck',
        peso: 1,
        lunghezza: 2
    },
    {
        nome: 'Zucchina striata di Napoli',
        peso: 12,
        lunghezza: 14
    },
    {
        nome: 'Zucchina lunga fiorentina',
        peso: 3,
        lunghezza: 4
    },
]

var pesoTot = 0;
for(i = 0; i < zucchina.length; i++) {
    var element = zucchina[i];
    console.log(element.nome + ': ' + element.peso);
    pesoTot += element.peso;
}

console.log('Il peso totale è: ' + pesoTot);



/* SNACK 2: */
// 1. Crea 10 oggetti che rappresentano una zucchina.
// 2. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// 3. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchina = [
    {
        nome: 'tipo1',
        peso: 5,
        lunghezza: 15
    },
    {
        nome: 'tipo2',
        peso: 3,
        lunghezza: 7
    },
    {
        nome: 'tipo3',
        peso: 4,
        lunghezza: 5
    },
    {
        nome: 'tipo4',
        peso: 9,
        lunghezza: 9
    },
    {
        nome: 'tipo5',
        peso: 2,
        lunghezza: 5
    },
    {
        nome: 'tipo6',
        peso: 10,
        lunghezza: 18
    },
    {
        nome: 'tipo7',
        peso: 6,
        lunghezza: 5
    },
    {
        nome: 'tipo8',
        peso: 1,
        lunghezza: 6
    },
    {
        nome: 'tipo9',
        peso: 12,
        lunghezza: 17
    },
    {
        nome: 'tipo10',
        peso: 3,
        lunghezza: 4
    },
]

var little = [];
var big = [];
var pesoLittle = 0;
var pesoBig = 0;

for(i = 0; i < zucchina.length; i++) {
    var element = zucchina[i];

    if(element.lunghezza > 10) {
        //console.log('Big: ' + element.lunghezza);
        big.push(element.lunghezza);
        pesoBig += element.peso;
    } else {
        //console.log('Little: ' + element.lunghezza);
        little.push(element.lunghezza)
        pesoLittle += element.peso ;
    }
}

console.log(big);
console.log(little);
console.log('Peso Big: ' + pesoBig);
console.log('Peso Little: ' + pesoLittle);



/* SNACK 3: */
// 1. Scrivi una funzione che accetti una stringa come argomento
// 2. e la ritorni girata (es. Ciao -> oaiC)

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
 
var result = reverseString("hello");
console.log(result);



/* SNACK 4: */
// 1. Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro

var numberArray = [1, 2, 3];
var letterArray = ['a', 'b','c'];
var mixArray = [];

for(i = 0; i < numberArray.length; i++) {
    var element = numberArray[i];
    mixArray.push(element,letterArray[i]);
}

console.log(mixArray);



/* SNACK 5: */
// 1. Scrivi una funzione che accetti tre argomenti:
// 2. un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// 3. La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArray = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var b = getRndInteger(2, array.length)
console.log('b: ' + b);

var a = getRndInteger(1, b - 1)
console.log('a: ' + a);

function prova(array, number1, number2) {
    for(var i = 0; i < array.length; i++) {
        return array.slice(number1, number2 - 1);
    }
}

var result = prova(array, a, b);
console.log('I numeri compresi sono: ' + result);

if(result == ''){
    alert('Non ci sono numeri compresi')
}






