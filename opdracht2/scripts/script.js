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


//Filter optie button 2
var deButton = document.querySelector("section.klik-op-sorteren button");


function menuTonen2(event) {
  let deNav = document.querySelector("section.klik-op-sorteren nav");
  deNav.classList.toggle("toonMenu2");
}

deButton.addEventListener("click", menuTonen2);


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

function handleHeartClick(event) {
  event.target.parentElement.classList.toggle('favoriet')

}

allHearts.forEach(heart => {
  heart.addEventListener('click', handleHeartClick)
})


// Hartje 1,2,3,4 etc geklikt / Sam heeft geholpen


var hartjeNummer = document.querySelector('header section a strong');


console.log(allHearts)

var counter = 0;

allHearts.forEach(heart => {
  heart.addEventListener('click', (event) => {
    event.target.classList.toggle('Voegtoe')
    counter++
    hartjeNummer.textContent = counter;
  })

});

//Hartje verplaatsen


// Filter Afgeronde hoeken

var afgerondeHoeken = document.querySelector('.hoekenja');

function toonAfgerondeHoeken(event) {
  let deImg = document.querySelector(".list li img");
  deImg.classList.add("toonHoeken");
}

afgerondeHoeken.addEventListener("click", toonAfgerondeHoeken)






// drag en drop Sanne github oefeningen
var options = {
  animation: 1000
}

var deLijst = document.getElementById('list');
var sortable = Sortable.create(deLijst, options);
