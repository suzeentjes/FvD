// JavaScript Document
console.log("howdy");

var tweeBijTwee = document.querySelector('#groot');
var drieBijDrie = document.querySelector('#klein');

tweeBijTwee.addEventListener('change', naarTweeBijTwee);
drieBijDrie.addEventListener('change', naarDrieBijDrie);

function naarTweeBijTwee (event) {
  var deLijst = document.querySelector('ul');
  deLijst.classList.add('tweeBijTwee');
  deLijst.classList.remove('drieBijDrie');
}

function naarDrieBijDrie (event) {
  var deLijst = document.querySelector('ul');
  deLijst.classList.add('drieBijDrie');
  deLijst.classList.remove('tweeBijTwee');
}


// Zoekfunctie
var options = { valueNames: [ 'name' ]};

var list = new List('theList', options);




//Filter optie button 1
var deButton = document.querySelector("section.klik-op-filter button");


function menuTonen(event) {

  let deNav = document.querySelector("section.klik-op-filter nav");
  deNav.classList.toggle("toonMenu");
}


deButton.addEventListener("click", menuTonen);




//Filter kleur optie
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
  let hetNieuweFilter = event.target.class;

  let deLijst = document.querySelector("fieldset.checkboxen");


  deLijst.classList.remove("rood");
  deLijst.classList.remove("paars");
  deLijst.classList.remove("blauw");
  deLijst.classList.remove("groen");
  deLijst.classList.remove("geel");
  deLijst.classList.remove("oranje");
  deLijst.classList.remove("zwartwit");
  deLijst.classList.remove("gekleurd");


  deLijst.classList.add(hetNieuweFilter);

  
