//Prendiamo il nostro puntatore
const element = document.getElementById('target');
const result = document.querySelector('.result')
const winnerIs = document.querySelector('.winneris')

element.addEventListener('click', function () {
    
    //creo il messaggio dei risulati
    let random = '';

    // generiamo due numeri casuali da 1 a 6
    const randomCpu = Math.floor(Math.random()*6)+1;
    const randomPlayer = Math.floor(Math.random()*6)+1;
    random += 'Il numero uscito: CPU ' + randomCpu + ' | ' + 'Giocatore: ' + randomPlayer;

    //creo il messaggio del vincitore
    let message = 'Ha vinto: ';
    let winner = 'L\'UOMO';
    
    //posibili risulati sulla vincita di uno dei due giocatori
    if(randomCpu === randomPlayer){
        message = 'Sono usciti gli stessi numeri. Riprova!';
        winner ='';
    }else if(randomCpu > randomPlayer){
        winner = 'IL COMPUTER';
    }

    //stampiamo i risultati
    message += winner;
    result.innerText = random;
    winnerIs.innerText = message;
})
