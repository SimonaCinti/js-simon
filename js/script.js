$(document).ready(function(){


    //Todo 1- Un alert espone 5 numeri casuali diversi.
    //Todo 2 - Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    //Todo 3 - Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


    // Var 
    var randomNumber = $('#random-number');
    var collectionNumbers = [];
    var minNumber = 1;
    var maxNumber = 100;
    var secondi = 5;

    // Creazione numeri random da parte del computer

    for ( i = 0; i < 5; i++){
       var selectNumber = Math.floor(Math.random () *( maxNumber - minNumber + 1)) + minNumber;
        collectionNumbers += ' ' + selectNumber;
    };

    console.log(collectionNumbers);
    
    // var timer = setInterval(function(){
    //     if (secondi == 0){
    //         console.log('scrivi i numeri!');
    //         clearInterval(timer);

    //     } else {
    //         alert('numeri casuali');
    //         secondi --;
    //     }

    // },1000);

}); // <--- end doc ready