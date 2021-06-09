// JavaScript Document
//Sanne heeft hierbij geholpen
var eenBijEen = document.querySelector('#super');
var tweeBijTwee = document.querySelector('#groot');
var drieBijDrie = document.querySelector('#klein');

eenBijEen.addEventListener('change', naarEenBijEen);
tweeBijTwee.addEventListener('change', naarTweeBijTwee);
drieBijDrie.addEventListener('change', naarDrieBijDrie);

function naarEenBijEen(event) {
  var deLijst = document.querySelector('ul');
  deLijst.classList.add('eenBijEen');
  deLijst.classList.remove('drieBijDrie');
  deLijst.classList.remove('tweeBijTwee');
}

function naarTweeBijTwee(event) {
  var deLijst = document.querySelector('ul');
  deLijst.classList.add('tweeBijTwee');
  deLijst.classList.remove('drieBijDrie');
  deLijst.classList.remove('eenBijEen');
}

function naarDrieBijDrie(event) {
  var deLijst = document.querySelector('ul');
  deLijst.classList.add('drieBijDrie');
  deLijst.classList.remove('tweeBijTwee');
  deLijst.classList.remove('eenBijEen');
}


// Zoekfunctie
//Zoekfunctie van de opdracht van Sanne gebruikt
var options = { valueNames: ['name'] };
var list = new List('theList', options);


//Filter optie button 1
var deButton = document.querySelector("section.klik-op-filter button");


function menuTonen(event) {
  let deNav = document.querySelector("section.klik-op-filter nav");
  deNav.classList.toggle("toonMenu");
}

deButton.addEventListener("click", menuTonen);





//Filter kleur optie
//Sam heeft mij hier bij geholpen
var allColorInputs = document.querySelectorAll('input[type="checkbox"]')


var filterRood = document.querySelector("#rood");
var filterPaars = document.querySelector("#paars");
var filterBlauw = document.querySelector("#blauw");
var filterGroen = document.querySelector("#groen");
var filterGeel = document.querySelector("#geel");
var filterOranje = document.querySelector("#oranje");
var filterZwartWit = document.querySelector("#zwartwit");
var filterGekleurd = document.querySelector("#gekleurd");



filterRood.addEventListener("change", filterenMaar);
filterPaars.addEventListener("change", filterenMaar);
filterBlauw.addEventListener("change", filterenMaar);
filterGroen.addEventListener("change", filterenMaar);
filterGeel.addEventListener("change", filterenMaar);
filterOranje.addEventListener("change", filterenMaar);
filterZwartWit.addEventListener("change", filterenMaar);
filterGekleurd.addEventListener("change", filterenMaar);


function filterenMaar(event) {
  let deLijst = document.querySelector(".list");

  deLijst.classList.remove("rood");
  deLijst.classList.remove("paars");
  deLijst.classList.remove("blauw");
  deLijst.classList.remove("groen");
  deLijst.classList.remove("geel");
  deLijst.classList.remove("oranje");
  deLijst.classList.remove("zwartwit");
  deLijst.classList.remove("gekleurd");


  allColorInputs.forEach(input => {
    if (input.checked) {
      deLijst.classList.add(input.value);
    }
  })
}

//Hartje button / Sam heeft geholpen
const allHearts = document.querySelectorAll('.list li button')



// Hartje 1,2,3,4 etc geklikt / Sam heeft geholpen


var hartjeNummer = document.querySelector('header section a strong');
var deNavigatie = document.querySelector('header section a img ');

var counter = 0;

allHearts.forEach(heart => {
  heart.addEventListener('click', (event) => {
    if (heart.parentElement.classList.contains('favoriet')) {

      heart.parentElement.classList.remove('favoriet');

      counter--;
      hartjeNummer.textContent = counter


    }
    else  {

      heart.parentElement.classList.add('favoriet');

      counter++;
      hartjeNummer.textContent = counter

      deNavigatie.classList.add('hartAnimatie');

    }


  })

});

//Animatie Hartje
const button = document.querySelectorAll('ul.list li button');

var hetHartje = document.querySelector('header section a img');

function handleClick(e){

  //voeg class toe op klik, dus zet animatie aan
  hetHartje.classList.add('turn')
}

function handleAnimationEnd(e){
//   verwijder de class wanneer de animatie eindigd, dus zet animatie op pauze
  hetHartje.classList.remove('turn')
}



hetHartje.addEventListener('animationend', handleAnimationEnd)


for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', handleClick)

}



//Filter slider
var deSlider = document.querySelector("main fieldset section.klik-op-filter nav aside input[type='range']");

function veranderMaat() {
  let deRondeHoeken = document.querySelectorAll("ul.list li img");
  console.log(deRondeHoeken);

   let nieuweMaat = parseInt(deSlider.value);



  for (var i = 0; i < deRondeHoeken.length; i++) {
  console.log(i);
  deRondeHoeken[i].className = "";
  switch(nieuweMaat) {
    case 1:
      deRondeHoeken[i].classList.add("vierkant");
      break;
    case 2:
      deRondeHoeken[i].classList.add("beetjeVierkant");
      break;
    case 3:
      deRondeHoeken[i].classList.add("ronder");
      break;
    case 4:
      deRondeHoeken[i].classList.add("rond");
      break;
    }
  }
}

deSlider.addEventListener('input', veranderMaat);



//Filter opslaan

var filterOpslaan = document.querySelector("#opslaan");

function verwijderMenu(event) {
  var menu = document.querySelector('section.klik-op-filter nav');
  console.log(menu)
  menu.classList.remove("toonMenu");
}

filterOpslaan.addEventListener('click', verwijderMenu);




//toonMenu openen met pijlen / van oefeningen Sanne

function openMenuMetToetsen(event) {

  let deNav = document.querySelector("section.klik-op-filter nav");


  switch(event.key) {

    case "ArrowRight":
      deNav.classList.add("toonMenu");

      break;

    case "ArrowLeft":
      deNav.classList.remove("toonMenu");
      break;

    case "Escape":
      deNav.classList.remove("toonMenu");
      break;
  }
}

document.addEventListener('keydown', openMenuMetToetsen);




// drag en drop Sanne github oefeningen
var options = {
  animation: 1000
}

var deLijst = document.getElementById('list');
var sortable = Sortable.create(deLijst, options);
