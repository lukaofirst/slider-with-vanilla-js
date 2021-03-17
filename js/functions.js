// DOM Elements
var currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelectorAll(".dots-container");

// Adding dots dynamically
const addDots = () =>{
    dotContainer.forEach((dot) => {
        dot.innerHTML = "";
        for(var i = 0; i < slides.length; i++) {
            dot.innerHTML += `<span></span>`;
        }
    })
}

addDots();

// After add dots dynamically, declare the variable of the span's
const dotSpan = document.querySelectorAll(".dots-container span");

// Initiating the currentSlides
const init = (n) => {

    // Setting display none for the other slides and removing the class active from the dot's
    slides.forEach( (slide) => {

        slide.style.display = "none";

        dotSpan.forEach((dot) => {
            dot.classList.remove("active");
        });
    })

    // Setting display block to currentSlide and adding class active to the current dot
    slides[n].style.display = "block";
    dotSpan[n].classList.add("active");

}

document.addEventListener("DOMContentLoaded", init(currentSlide));

// Clicking on the dot's, change the currentSlide
dotSpan.forEach((dot,i) => {
    dot.addEventListener('click', () => {
        init(i);
        currentSlide = i;
    })
})

// Running the slider
setInterval(() => {
    next()
},3000);

// Setting the next and previous buttons 
const next = () => {
    currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
    init(currentSlide);
}

const prev = () => {
    currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
    init(currentSlide);
}

// Running the event's
document.querySelector(".next").addEventListener('click', next);
document.querySelector(".prev").addEventListener('click', prev);