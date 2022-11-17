
// recupero i bottini dall'html
const btnAvanti = document.getElementById("slider-btn-avanti");
const btnIndietro = document.getElementById("slider-btn-indietro");

// recupero il contenitore che conterra immagini e testi
const sliederImmageEl = document.querySelector(".slider-container")
console.log(sliederImmageEl);

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


images.forEach(function (images, i) {
    console.log(images.image);
    console.log(images.title);
    console.log(images.text);

    // const pEl = document.createElement("p")
    // pEl.innerHTML = images.text;
    // sliederImmageEl.append(pEl);
})


const immages = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"

];
console.log(immages);


let currentImgIndex = 0;

const sliderImgEl = document.querySelector(".slider-img");

sliderImgEl.src = immages[currentImgIndex];



btnAvanti.addEventListener("click", function () {
    console.log("bottone avanti cliccato")

    currentImgIndex++;

    if (currentImgIndex > immages.length - 1) {
        currentImgIndex = 0;
    }

    sliderImgEl.src = immages[currentImgIndex];

})


btnIndietro.addEventListener("click", function () {
    console.log("bottone indietro cliccato")

    currentImgIndex--;

    if (currentImgIndex < 0) {
        currentImgIndex = 4;
    }

    sliderImgEl.src = immages[currentImgIndex];
})