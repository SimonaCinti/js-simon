$(document).ready(function(){

/** 
* Variabili
*/

var waitTime = 1000;
var randomNumbers = [];
var randomMin = 1;
var randomMax = 100;

// Pc genera 5 numeri random univoci

while (randomNumbers.length < 5 ) {
    var randomGen = getRandomNumber(randomMin, randomMax);

    if ( !randomNumbers.includes(randomGen)){
        randomNumbers.push(randomGen);
    }
}

alert(randomNumbers);

/**
 *  Game start
 */

setTimeout(function(){
    var userNumbers = [];

    while (userNumbers.length < 5) {

        var newUserNumber = parseInt( prompt('Inserisci il ' + (userNumbers.length + 1) +' numero') );

        while (isNaN(newUserNumber)){
        newUserNumber = parseInt(prompt('Non hai inserito un numero corretto. Inserisci il' + (userNumbers.length + 1) + ' numero'));
        }

        // Univocità

        if (!userNumbers.includes(newUserNumber)){
            userNumbers.push(newUserNumber);
        }
        else{
            alert('Numero già inserito');
        }

    }

    // collect right numbers

    var rightGuess = [];

    for (var i = 0; i < userNumbers.length; i++) {
        if (randomNumbers.includes(userNumbers[i])){
            rightGuess.push(userNumbers[i]);
        }
    }

    // Player Score

    alert('Risultati\n' + 
        'Lista proposta:\n' + randomNumbers +
        '\nLista Utente \n' + userNumbers +
        '\nIndovinati ' + rightGuess.length + ' numeri\n' + rightGuess);


   

}, waitTime);


/** 
 * Funzioni
 */

 // Funzione gen random number

 function getRandomNumber (min, max){
     return Math.floor(Math.random() * (max - min +1) + min);

 }


});