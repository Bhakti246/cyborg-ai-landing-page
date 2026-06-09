// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll Animation

window.addEventListener("scroll", reveal);

function reveal() {

    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add("active");
        }

    });
}

reveal();

// Contact Form

document.querySelector("form")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Message Sent Successfully!"
);

});