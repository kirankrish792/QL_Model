const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const section = document.querySelector('.body');
const preLoader = document.querySelector(".preloader");

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

nav.addEventListener('click', () => {
    nav.classList.toggle('active');
});

section.addEventListener('click', () => {
    if (nav.className === "nav active") {
        nav.classList.toggle('active');
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        preLoader.classList.toggle('active');
    }, 2000);
});

