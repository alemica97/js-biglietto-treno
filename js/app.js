//chiedo all'utente quanti chilometri vuole percorrere
const km = parseInt(prompt('Ciao, quanti chilometri vuoi percorrere?'));
console.log(`vuoi percorrere ${km}km`);

//chiedo all'utente la sua età
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(`hai ${userAge} anni`);


//in una variabile salvo il prezzo del biglietto senza sconti
const priceForKm = (0.21 * km);
console.log(`il prezzo senza sconto è ${priceForKm}`);

//dichiaro una variabile che assume il valore a seconda dell'età dell'utente e della percentuale di sconto
let finalPrice;

//Se l'utente ha meno di 18 anni avrà uno sconto del 20%
if (userAge < 18){
    finalPrice = priceForKm - ((20 / 100) * priceForKm);
//Se l'utente ha più di 65 anni avrà uno sconto del 40%
} else if(userAge > 65){
    finalPrice = priceForKm - ((40 / 100) * priceForKm);
//Altrimenti non avrà nessuno sconto
}else{
    finalPrice = priceForKm; 
}

//faccio in modo che dopo la virgola ci siano solo due cifre
finalPrice = finalPrice.toFixed(2);
console.log(`il prezzo finale è ${finalPrice}`);

const htmlElement = document.getElementById('price');

htmlElement.innerHTML  += ` ${finalPrice}`;