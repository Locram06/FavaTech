//sfondo 
function cambiaSfondo() 
{
  var body = document.body;
  var switchElement = document.getElementById('backgroundSwitch');
  var nuovaProprieta;

  if (switchElement.checked) 
  {
    nuovaProprieta = 
    {
      marginLeft: '15%',
      width: '60%',
      backgroundImage: 'linear-gradient(to left, #00c6fb 0%, #005bea 100%)'      
    };
  } 
  else 
  {
    nuovaProprieta = 
    {
      marginLeft: '15%',
      width: '60%',
      backgroundImage: 'linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%)'  
    };
  }

  localStorage.setItem('nuovaProprieta', JSON.stringify(nuovaProprieta));

  body.style.marginLeft = nuovaProprieta.marginLeft;
  body.style.width = nuovaProprieta.width;
  body.style.backgroundImage = nuovaProprieta.backgroundImage;

  localStorage.setItem('switchPosition', switchElement.checked);

  Object.keys(nuovaProprieta).forEach(function(key) {
    body.style[key] = nuovaProprieta[key];
  });
}

//applico posizione switch
var switchPosition = localStorage.getItem('switchPosition');
if (switchPosition) 
{
  var switchElement = document.getElementById('backgroundSwitch');
  switchElement.checked = switchPosition === 'true';
  cambiaSfondo(); 
}

//prendo dati user
function mostraPrompt() 
{
  //nome
  localStorage.setItem('nome', prompt("Inserisci il tuo nome:"));

  var nombre = localStorage.getItem('nome');

  if (nombre) {} 
  else 
  {
    nombre = prompt("Nessun nome inserito, perfavore inserire nome.");
  }

  //cognome
  localStorage.setItem('cognome', prompt("Inserisci il tuo cognome:"));

  var cognombre = localStorage.getItem('cognome');

  if (cognombre) {} 
  else 
  {
    alert("Nessun cognome inserito.");
  }

  //data di nascita
  localStorage.setItem('giorno', prompt("Inserisci il giorno in cui sei nato:"));
  localStorage.setItem('mese', prompt("Inserisci il tuo mese di nascita:"));
  localStorage.setItem('anno', prompt("Inserisci l'anno in cui sei nato:"));

  var giornos = localStorage.getItem('giorno');
  var meses = localStorage.getItem('mese');
  var annos = localStorage.getItem('anno');

  if (giornos) {} 
  else 
  {
    datas = prompt("Nessun nome inserito, perfavore inserire nome.");
  }

  if (meses) {} 
  else 
  {
    datas = prompt("Nessun nome inserito, perfavore inserire nome.");
  }

  if (annos) {} 
  else 
  {
    datas = prompt("Nessun nome inserito, perfavore inserire nome.");
  }

  //recapiti
  localStorage.setItem('email', prompt("Inserisci la tua e-mail:"));
  localStorage.setItem('telefono', prompt("Inserisci il tuo numero di telefono:"));

  var emailos = localStorage.getItem('email');
  var telefonos = localStorage.getItem('telefono');

  if (emailos) {} 
  else 
  {
    emailos = prompt("Nessun nome inserito, perfavore inserire nome.");
  }

  if (telefonos) {} 
  else 
  {
    telefonos = prompt("Nessun nome inserito, perfavore inserire nome.");
  }

  location.reload ()
}

//prendo pfp
function getuserimg()
{
  localStorage.setItem('nuovaImmagine', prompt("iserisci un link alla tua nuova immagine profilo"));
  var pfp = localStorage.getItem('nuovaImmagine');
  if(pfp) {}
  else
  {
    pfp = prompt("Nessun link inserito, iserisci un link alla tua nuova immagine profilo");
  }

  location.reload()
}







