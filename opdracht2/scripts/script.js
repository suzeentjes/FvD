// JavaScript Document
//Sanne heeft hierbij geholpen
var tweeBijTwee = document.querySelector('#groot');
var drieBijDrie = document.querySelector('#klein');

tweeBijTwee.addEventListener('change', naarTweeBijTwee);
drieBijDrie.addEventListener('change', naarDrieBijDrie);

function naarTweeBijTwee(event) {
  var deLijst = document.querySelector('ul');
  deLijst.classList.add('tweeBijTwee');
  deLijst.classList.remove('drieBijDrie');
}

function naarDrieBijDrie(event) {
  var deLijst = document.querySelector('ul');
  deLijst.classList.add('drieBijDrie');
  deLijst.classList.remove('tweeBijTwee');
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

const allHearts = document.querySelectorAll('.list li button')

function handleHeartClick(event) {
  event.target.parentElement.classList.toggle('favoriet')
}

allHearts.forEach(heart => {
  heart.addEventListener('click', handleHeartClick)
})


// drag en drop Sanne github oefeningen
var options = {
  animation: 1000
}

var deLijst = document.getElementById('list');
var sortable = Sortable.create(deLijst, options);






interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    draggableElement.textContent = 'Dragged in'
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped'
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })
