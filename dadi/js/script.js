// alert('ciao');
// Gioco dei dadi, chi fa di più vince
alert('tira i dadi');
// document.getElementById("primo_dado").innerHTML = first;
var first = Math.floor(Math.random() * 7);
console.log(first);
// document.getElementById("secondo_dado").innerHTML = second;
var second = Math.floor(Math.random() * 7);
console.log(second);

var somma = first + second;
console.log(somma);

alert('Ricorda il numero che hai totalizzato tirando i dadi e ritira di nuovo i dadi');
var third = Math.floor(Math.random() * 7);
console.log(third);
var fourth = Math.floor(Math.random() * 7);
console.log(fourth);

var secondoTiro = third + fourth;
console.log(secondoTiro);

if (somma >= secondoTiro) {
  console.log('Hai vinto');
} else if (somma = secondoTiro) {
  console.log ('Riprova');
} else {
  console.log('Hai perso');
}
