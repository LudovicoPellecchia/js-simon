const timerElement= document.querySelector(".timer")

//Setto l'orario a cui devo arrivare (in millisecondi)
const countDownDate = new Date("July 14, 2023 9:30").getTime();

//Funzione che aggiorna il countdown ogni secondo
const countDown = setInterval(function () {

    //Ricavo l'ora attuale (in millisecondi)
    const todayDate = new Date().getTime()

    //Differenza tra orario attuale e orario di arrivo (in millisecondi)
    const distance = countDownDate - todayDate

    //Ricavo giorni, ore, minuti e secondi del countdown
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output risultato html
    timerElement.innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

}, 1000)



