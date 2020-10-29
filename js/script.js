$(document).ready(function(){


    //Todo 1- Un alert espone 5 numeri casuali diversi.
    //Todo 2 - Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    //Todo 3 - Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


    // Var 
    var randomNumber = $('#random-number');
    var collectionNumbers = [];
    var minNumber = 1;
    var maxNumber = 10;
    var secondi = 5;

    // Creazione numeri random da parte del computer

    for ( i = 0; i < 5; i++){
       var selectNumber = Math.floor(Math.random () *( maxNumber - minNumber + 1)) + minNumber;
       //check number già non presente
       while (collectionNumbers.includes(selectNumber)){
           var selectNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
       }
        collectionNumbers += ' ' + selectNumber;
    };

    randomNumber.text(collectionNumbers);



    // Mostra i numeri su schermo per 30 secondi

    
    // var timer = setInterval(function(){
    //     if (secondi == 0){
    //         console.log('scrivi i numeri!');
    //         clearInterval(timer);

    //     } else {
    //         alert('numeri casuali');
    //         secondi --;
    //     }

    // },1000);

    // Chiedi al giocatore di inserire per 5 volte un numero


    //Check che la collezione di numeri sia compresa nei numeri generati dal computer

    // Il software dice quali sono i numeri che sono stati indovinati
    


}); // <--- end doc ready