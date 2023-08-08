const reveals = document.querySelectorAll(".reveal");

const reveal = () => {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
};

window.addEventListener("scroll", reveal);
reveal();

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("nav-active")
    navMenu.classList.toggle("nav-mobile")
    navMenu.classList.toggle("active")
    navMenu.classList.toggle("slide-in-up")
})