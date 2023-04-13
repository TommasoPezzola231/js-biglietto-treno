const tariffa = 0.21;

let chilometriDaPercorrere = prompt(`Quanti chilometri devi percorrere?`);

let eta = prompt(`Quanti anni hai?`);

let prezzo = chilometriDaPercorrere * tariffa;

let prezzoFinale = null

if (eta < 18) {
    prezzoFinale = prezzo - (prezzo * 0.2)
    alert(`Il prezzo del biglietto sarebbe ${prezzo}€ ma siccome hai un'eta inferiore ai 18 anni puoi usufruire di uno sconto del 20% e il tuo prezzo sarà ${prezzoFinale}€`)
} else if (eta > 65) {
    prezzoFinale = prezzo - (prezzo * 0.4)
    alert(`Il prezzo del biglietto sarebbe ${prezzo}€ ma siccome hai un'eta superiore ai 65 anni puoi usufruire di uno sconto del 40% e il tuo prezzo sarà ${prezzoFinale}€`)
} else {
    prezzoFinale = prezzo
    alert(`Il prezzo del biglietto è ${prezzoFinale}€`)
}
