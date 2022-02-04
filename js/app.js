//chiedo all'utente quanti chilometri vuole percorrere
const km = prompt('Ciao, quanti chilometri vuoi percorrere?');
console.log(km);

//chiedo all'utente la sua età
const userAge = prompt('Quanti anni hai?');
console.log(userAge);

//in una variabile salvo il prezzo del biglietto senza sconti
const priceForKm = (0.21 * km);
console.log(priceForKm);

//Se l'utente ha meno di 18 anni avrà uno sconto del 20%
//Se l'utente ha più di 65 anni avrà uno sconto del 40%
//Altrimenti non avrà nessuno sconto

let discountedTicket;

if (userAge < 18){
    discountedTicket = priceForKm - ((20 / 100) * priceForKm);
} else if(userAge > 65){
    discountedTicket = priceForKm - ((40 / 100) * priceForKm);
}else{
    discountedTicket = priceForKm; 
}

console.log(discountedTicket);

