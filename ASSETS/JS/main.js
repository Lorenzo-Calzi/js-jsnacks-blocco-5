/* SNACK 1: */
// 1. Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// 2. Calcola quanto pesano tutte le zucchine.

/* var zucchina = [
    {
        nome: 'tipo1',
        peso: 5,
        lunghezza: 10
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
        lunghezza: 4
    },
    {
        nome: 'tipo5',
        peso: 2,
        lunghezza: 3
    },
    {
        nome: 'tipo6',
        peso: 10,
        lunghezza: 12
    },
    {
        nome: 'tipo7',
        peso: 6,
        lunghezza: 5
    },
    {
        nome: 'tipo8',
        peso: 1,
        lunghezza: 2
    },
    {
        nome: 'tipo9',
        peso: 12,
        lunghezza: 14
    },
    {
        nome: 'tipo10',
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

console.log('Il peso totale è: ' + pesoTot); */



/* SNACK 2: */
// 1. Crea 10 oggetti che rappresentano una zucchina.
// 2. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// 3. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

/* var zucchina = [
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
console.log('Peso Little: ' + pesoLittle); */



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


/* Snack 4: */
// 1. Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro

var letterArray = ['a', 'b','c'];
var numberArray = [1, 2, 3];
var mixArray = [];

for(i = 0; i < numberArray.length; i++) {
    var element = numberArray[i];
    mixArray.push(element,letterArray[i]);
}

console.log(mixArray);



