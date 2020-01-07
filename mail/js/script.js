// alert('Ciao');

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato

// Chiedi all’utente la sua email
var mailUtente = prompt('Inserisci la tua mail');
// controlla che sia nella lista di chi può accedere
var listaMail = ['mario.falcinelli@gmail.com', 'cecilia.rizzo@tiscali.it', 'francesca.bentivoglio@alice.it',  'andrea.stroppa@livemail.it', 'michela.frattoni@hotmail.com'];
// console.log(listaMail);
var mailTrovata = false;
for (var i = 0; i < listaMail.length; i++) {
  // console.log(listaMail[i]);
  var mail = listaMail[i];
  if (mailUtente == mail) {
    mailTrovata = true;
    // console.log('Indirizzo mail presente')
  }
}
// stampa un messaggio appropriato
console.log(mailTrovata);
if (mailTrovata == false) {
  console.log('Indirizzo mail non presente');
}
else {
  console.log('Indirizzo mail presente');
}
