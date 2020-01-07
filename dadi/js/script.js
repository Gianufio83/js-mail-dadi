// alert('ciao');
// Gioco dei dadi, chi fa di più vince
alert('tira i dadi');
document.getElementById("primo_dado").innerHTML =
 Math.floor(Math.random() * 7);
document.getElementById("secondo_dado").innerHTML =
 Math.floor(Math.random() * 7);
var totale = primo_dado + secondo_dado;
document.getElementById('dadi').innerHTML = 'totale';
