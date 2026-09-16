/*
    SCRIPT DO MENU RETRÁTIL
*/

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu_toggle");
    const navLinks = document.querySelector(".nav_links");

    console.log("Botão:", menuToggle);
    console.log("Menu:", navLinks);

    if (!menuToggle || !navLinks) {
        console.error("ERRO: botão ou menu não encontrado.");
        return;
    }

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
        } else {
            menuToggle.innerHTML = "☰";
        }

    });

});