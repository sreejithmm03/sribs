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