console.log("Performance Report Loaded");

/*=========================================
Research Abstract Toggle
=========================================*/

document.querySelectorAll(".abstract-btn").forEach(button => {

    button.addEventListener("click", function () {

        const abstract = this.nextElementSibling;

        if (abstract.style.display === "block") {

            abstract.style.display = "none";
            this.innerHTML = "+ Read Abstract";

        } else {

            abstract.style.display = "block";

            // Render LaTeX inside the abstract
            if (window.MathJax) {
                MathJax.typesetPromise([abstract]);
            }

            this.innerHTML = "− Hide Abstract";

        }

    });

});


/*=========================================
Reveal Sections on Scroll
=========================================*/

const reveals = document.querySelectorAll("section");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            section.classList.add("reveal");

            setTimeout(() => {

                section.classList.add("active");

            }, 100);

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


/*=========================================
Sidebar
Desktop : Hover
Mobile  : Click
=========================================*/

const menu = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

let sidebarTimeout;

/* ---------- Desktop Hover ---------- */

menu.addEventListener("mouseenter", () => {

    clearTimeout(sidebarTimeout);
    sidebar.classList.add("active");

});

sidebar.addEventListener("mouseenter", () => {

    clearTimeout(sidebarTimeout);

});

sidebar.addEventListener("mouseleave", () => {

    sidebarTimeout = setTimeout(() => {

        sidebar.classList.remove("active");

    }, 300);

});

/* ---------- Mobile Click ---------- */

menu.addEventListener("click", () => {

    sidebar.classList.add("active");

});

closeBtn.addEventListener("click", () => {

    sidebar.classList.remove("active");

});



/*=========================================
Close Sidebar After Clicking a Link
=========================================*/

document.querySelectorAll("#sidebar a").forEach(link => {

    link.addEventListener("click", () => {

        sidebar.classList.remove("active");

    });

});

/*=====================================
IMAGE CAROUSEL
======================================*/

const track=document.querySelector(".carousel-track");

if(track){

const slides=document.querySelectorAll(".carousel-slide");

const prev=document.querySelector(".prev");

const next=document.querySelector(".next");

const dotsContainer=document.querySelector(".carousel-dots");

let index=0;

const maxIndex=slides.length-2;

function updateCarousel(){

const slideWidth=slides[0].offsetWidth+20;

track.style.transform=
`translateX(-${index*slideWidth}px)`;

document.querySelectorAll(".carousel-dot")
.forEach((dot,i)=>{

dot.classList.toggle("active",i===index);

});

}

for(let i=0;i<=maxIndex;i++){

const dot=document.createElement("div");

dot.classList.add("carousel-dot");

if(i===0) dot.classList.add("active");

dot.addEventListener("click",()=>{

index=i;

updateCarousel();

});

dotsContainer.appendChild(dot);

}

next.addEventListener("click",()=>{

if(index<maxIndex){

index++;

}else{

index=0;

}

updateCarousel();

});

prev.addEventListener("click",()=>{

if(index>0){

index--;

}else{

index=maxIndex;

}

updateCarousel();

});

let autoplay=setInterval(()=>{

if(index<maxIndex){

index++;

}else{

index=0;

}

updateCarousel();

},4000);

const container=
document.querySelector(".carousel-container");

container.addEventListener("mouseenter",()=>{

clearInterval(autoplay);

});

container.addEventListener("mouseleave",()=>{

autoplay=setInterval(()=>{

if(index<maxIndex){

index++;

}else{

index=0;

}

updateCarousel();

},4000);

});

window.addEventListener("resize",updateCarousel);

updateCarousel();

}