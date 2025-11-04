// Your code here.

function toggleMenu() {
    const burgerButton = document.querySelector("#menu-toggle");
    console.log(burgerButton);
    burgerButton.classList.toggle("active");


    const nav = document.querySelector("#nav-links");
    console.log(nav);
    nav.classList.toggle("active");
}