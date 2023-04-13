const tariffa = 0.21;

let chilometriDaPercorrere = prompt(`Quanti chilometri devi percorrere?`);

let eta = prompt(`Quanti anni hai?`);

let prezzo = chilometriDaPercorrere * tariffa;
prezzo = prezzo.toFixed(2)

let verifica = chilometriDaPercorrere + eta;

let prezzoFinale = null;

if (isNaN(verifica)) {
    alert(`I dati inseriti non sono corretti, ricarica la pagina`)
} else if (eta < 18) {
    prezzoFinale = prezzo - (prezzo * 0.2)
    prezzoFinale = prezzoFinale.toFixed(2)
    alert(`Il prezzo del biglietto sarebbe ${prezzo}€ ma siccome hai un'eta inferiore ai 18 anni puoi usufruire di uno sconto del 20% e il tuo prezzo sarà ${prezzoFinale}€`)
} else if (eta > 65) {
    prezzoFinale = prezzo - (prezzo * 0.4)
    prezzoFinale = prezzoFinale.toFixed(2)
    alert(`Il prezzo del biglietto sarebbe ${prezzo}€ ma siccome hai un'eta superiore ai 65 anni puoi usufruire di uno sconto del 40% e il tuo prezzo sarà ${prezzoFinale}€`)
} else {
    prezzoFinale = prezzo
    prezzoFinale = prezzoFinale.toFixed(2)
    alert(`Il prezzo del biglietto è ${prezzoFinale}€`)
}
