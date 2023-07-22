//applico sfondo
var proprietaSalvate = localStorage.getItem('nuovaProprieta');
if (proprietaSalvate) 
{
  var nuovaProprieta = JSON.parse(proprietaSalvate);
  document.body.style.marginLeft = nuovaProprieta.marginLeft;
  document.body.style.width = nuovaProprieta.width;
  document.body.style.backgroundImage = nuovaProprieta.backgroundImage;
}

//uso dati user
document.addEventListener('DOMContentLoaded', function () 
{
  var name = localStorage.getItem('nome');

  var sname = localStorage.getItem('cognome');

  var sgio = localStorage.getItem('giorno');
  var smes = localStorage.getItem('mese');
  var sann = localStorage.getItem('anno');

  var smail = localStorage.getItem('email');
  var stel = localStorage.getItem('telefono');

  var saluto = document.getElementById('saluti');

  var lmone = document.getElementById('nome');

  var lsname = document.getElementById("cognome");

  var date = document.getElementById("date");

  var lmail = document.getElementById("mail");
  var ltel = document.getElementById("cell");


  saluto.innerHTML = "Ciao " + name;
  
  lmone.innerHTML = name;

  lsname.innerHTML = sname;

  date.innerHTML = sgio +"/"+ smes +"/"+ sann;

  lmail.innerHTML = smail;
  ltel.innerHTML = stel;  
});

//nome in bar-up
document.addEventListener('DOMContentLoaded', function()
{
    var ns = localStorage.getItem('nome');
    var nl = document.getElementById('n.br-up');

    nl.innerHTML = ns;
});

//applico pfp
document.addEventListener('DOMContentLoaded', function () 
{
  var imgElement = document.getElementById('img-user');
  spfp = localStorage.getItem('nuovaImmagine');
  imgElement.src = spfp;
});
