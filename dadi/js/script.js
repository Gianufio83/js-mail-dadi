// alert('ciao');
// Gioco dei dadi, chi fa di più vince
alert('tira i dadi');
var first = Math.floor(Math.random() * 7);
// document.getElementById("primo_dado").innerHTML = first;
console.log(first);
var second = Math.floor(Math.random() * 7);
// document.getElementById("secondo_dado").innerHTML = second;
console.log(second);

var sommaUno = first + second;
console.log(sommaUno);

alert('Ricorda il numero che hai totalizzato tirando i dadi e ritira di nuovo i dadi');

var third = Math.floor(Math.random() * 7);
console.log(third);
var fourth = Math.floor(Math.random() * 7);
console.log(fourth);

var secondoTiro = third + fourth;
console.log(secondoTiro);

if (sommaUno > secondoTiro) {
  console.log('Hai vinto');
}
else if (sommaUno == secondoTiro) {
  console.log ('Riprova');
}
else {
  console.log('Hai perso');
}
