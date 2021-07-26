console.log(window.innerHeight); //hauteur de la fênetre
console.log(window.scrollY); //Scroll Vertical
const selectId = (s)=> document.querySelector(s);

selectId('#innerHeight').textContent = window.innerHeight;
selectId('#scrollY').textContent = window.scrollY;

// window.open('http://google.com', 'cour js', 'height=600, width=800'); ouvre la fênetre
// window.close() ferme la fênetre

//Evenements adossés à window
// alert("hello!")

//confirm
selectId('#confirm').addEventListener('click', ()=> {
  confirm('Voulez-vous vraiment vous trompez ?');
})

//prompt
let name;
selectId('#prompt').addEventListener('click', ()=> {
  name = prompt('Entrez votre nom ?');
  selectId('#prenom').textContent = ` coucou ${name} bravo !`;
})

//Timer,compte à rebours
setTimeout( ()=> {
  selectId('#confirm').classList.add('newStyle');
}, 2000);

/*setInterval( ()=> {
  document.body.innerHTML += '<h2>setInterval</h2>'
},10)

pour l'arrêter inclure setInterval dans une variable et faire un 
clearInterval(variable) au click etc...

*/


//location
selectId('#href').textContent = location.href;
selectId('#host').textContent = location.host;
selectId('#pathname').textContent = location.pathname;
//location.replace('https://github.com/codwerk');


//navigator
console.log(navigator.userAgent);

//history
console.log(history);
//window.history.back();
//history.go(-2);