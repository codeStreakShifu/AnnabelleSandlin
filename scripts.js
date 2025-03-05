document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.createElement("button");
    navToggle.classList.add("nav-toggle");
    navToggle.innerHTML = "&#9776;"; // Hamburger icon

    const nav = document.querySelector("nav");
    const navList = nav.querySelector("ul");

    nav.prepend(navToggle);

    navToggle.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});
