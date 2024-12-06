//Fetchin containers from html

const navbar = document.querySelector(".navbar");
const logoContainer = document.querySelector(".navbar__logo-container");
const logoLink = document.querySelector(".navbar__logo-link");
const merchLink = document.querySelector(".navbar__link--merch");
const discographyLink = document.querySelector(".navbar__link--discography");

const concertsLink = document.querySelector(".navbar__link--concerts");
const soMeLink = document.querySelector(".navbar__link--some");
const epkLink = document.querySelector(".navbar__link--epk");
const cartLink = document.querySelector(".navbar__link--cart");

//Creating the navbar logo and appending to a link

const logo = document.createElement("img");
logo.setAttribute("src", "../assets/images/Logo_wht.png");
logo.classList.add("navbar__logo");

logoLink.appendChild(logo);

//Applying text to the links
merchLink.textContent = "Merch";
discographyLink.textContent = "Discography";
concertsLink.textContent = "Concerts";
soMeLink.textContent = "SoMe";
epkLink.textContent = "EPK";
cartLink.textContent = "Cart";
