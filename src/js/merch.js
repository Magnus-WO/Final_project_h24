//Fetching html elements
const merchSection = document.querySelector(".merch-section");
const headerContainer = document.querySelector(".merch__header-container");
const header = document.querySelector(".merch__header");
const searchContainer = document.querySelector(
  ".merch__header--search-container"
);
const merchCardsContainer = document.querySelector(".merch__container");

//Creating the array for the merch
const merch = [
  {
    image: "../src/assets/images/products/embers-wht.jpg",
    price: "250kr",
    info: "Designed by Daria, made by Black Diamond Clothing, our tshirt features a custom skull inspired by our song 'Embers'",
    id: "embers__tshirt-wht",
    isAvailable: true,
  },
  {
    image: "../src/assets/images/products/hoodie.jpg",
    price: "600kr",
    info: "Designed by Daria, made by Black Diamon Clothing, our hoodie features a custom skull inspired by our song 'Embers'",
    id: "embers-hoodie",
    isAvailable: true,
  },
  {
    image: "../src/assets/images/products/embers-blck.jpg",
    price: "250kr",
    info: "Designed by Daria, made by Black Diamon Clothing, our tshirt features a custom skull inspired by our song 'Embers'",
    id: "embers__tshirt-blck",
    isAvailable: true,
  },
  {
    image: "../src/assets/images/products/dawn-tshirt.jpg",
    price: "250kr",
    info: "Designed by us, made by Diger Distro, our tshirt features our own take on the 'Delta' symbol used on our EP 'Dawn'",
    id: "dawn__tshirt-blck",
    isAvailable: true,
  },
  {
    image: "../src/assets/images/products/patch.jpg",
    price: "50kr",
    info: "Our own logo sewed onto a black patch with high quality stitching",
    id: "patch",
    isAvailable: true,
  },
  {
    image: "../src/assets/images/products/AMP-cd.png",
    price: "200kr",
    info: "A collectors CD with all bands signed on Braak Records",
    id: "amp-cd",
    isAvailable: true,
    url: "https://braakrecords.com/",
  },
];

//Function for creating the cards
const createMerchCards = () => {
  merch.forEach((card) => {
    const merchCard = document.createElement("div");
    merchCard.classList.add("merch__card");

    const merchImage = document.createElement("img");
    merchImage.setAttribute("src", card.image);
    merchImage.setAttribute("alt", card.info);
    merchImage.classList.add("merch__image");

    const merchPrice = document.createElement("p");
    merchPrice.textContent = card.price;
    merchPrice.classList.add("merch__price");

    const merchInfo = document.createElement("p");
    merchInfo.textContent = card.info;
    merchInfo.classList.add("merch__info");

    merchCard.append(merchImage, merchPrice);
    merchCardsContainer.appendChild(merchCard);
  });
};

//Making a search field
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "search products");

searchContainer.append(searchInput);

createMerchCards();
