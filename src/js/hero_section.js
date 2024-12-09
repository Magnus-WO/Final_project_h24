//Fetching elements from html
const heroSection = document.querySelector(".hero-section");
const imageContainer = document.querySelector(".hero-section__image-container");
const infoContainer = document.querySelector(".hero-section__info-container");

//Creating elements
const heroImage = document.createElement("img");
heroImage.setAttribute("src", "./assets/images/hero-section2.png");
heroImage.classList.add("hero-section__image");

heroSection.append(heroImage);
