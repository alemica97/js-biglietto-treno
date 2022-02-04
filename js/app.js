//chiedo il nome all'utente
const userName = prompt('Ciao, come ti chiami?');

//chiedo all'utente quanti chilometri vuole percorrere
const km = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log(`vuoi percorrere ${km}km`);

//chiedo all'utente la sua età
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(`hai ${userAge} anni`);

document.getElementById('saluto').innerHTML += `Ciao ${userName}, quindi hai ${userAge} anni e vuoi percorrere ${km}km`

//in una variabile salvo il prezzo del biglietto senza sconti
const priceForKm = (0.21 * km);
console.log(`il prezzo senza sconto è ${priceForKm}`);

//dichiaro una variabile che assume il valore a seconda dell'età dell'utente e della percentuale di sconto
let finalPrice;

//Se l'utente ha meno di 18 anni avrà uno sconto del 20%
if (userAge < 18){
    finalPrice = priceForKm - ((20 / 100) * priceForKm);
    document.writeln('hai avuto uno sconto del 20%');
//Se l'utente ha più di 65 anni avrà uno sconto del 40%
} else if(userAge > 65){
    finalPrice = priceForKm - ((40 / 100) * priceForKm);
    document.writeln('hai avuto uno sconto del 40%');
//Altrimenti non avrà nessuno sconto
}else{
    finalPrice = priceForKm; 
    document.writeln('non hai avuto uno sconto');
}
console.log(`il prezzo scontato è ${finalPrice}`)

//faccio in modo che dopo la virgola ci siano solo due cifre, arrotondando per eccesso
finalPrice = finalPrice.toFixed(2);
console.log(`il prezzo finale è ${finalPrice}`);

const htmlElement = document.getElementById('price');

htmlElement.innerHTML  += `Vista la tua età, il prezzo finale è ${finalPrice}€`;