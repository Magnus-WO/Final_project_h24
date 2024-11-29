//Fetching elements from html
const heroSection = document.querySelector(".hero-section");
const imageContainer = document.querySelector(".hero-section__image-container");
const infoContainer = document.querySelector(".hero-section__info-container");

//Creating elements
const heroImage = document.createElement("img");
heroImage.setAttribute("src", "../src/assets/images/hero-section2.png");
heroImage.classList.add("hero-section__image");

const heroInfo1 = document.createElement("p");
heroInfo1.classList.add("hero-section__info");
heroInfo1.classList.add("hero-section__info--1");
heroInfo1.textContent =
  "Diavola is an Oslo based groovemetal band established in January of 2024. The music takes inspiration from the members' favourite artists and genres and doesn't put boundaries on the band! Diavola will give you fast riffs, heavy breakdowns and an energetic liveshow!";

const heroInfo2 = document.createElement("p");
heroInfo2.classList.add("hero-section__info");
heroInfo2.classList.add("hero-section__info--2");
heroInfo2.textContent = "Photo: Michael Hermansen";

//Appending elements
heroImage.append(heroInfo1, heroInfo2);
heroSection.append(heroImage);
