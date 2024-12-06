//Fetching html elements
const merchSection = document.querySelector(".merch-section");
const headerContainer = document.querySelector(".merch__header-container");
const header = document.querySelector(".merch__header");
const searchContainer = document.querySelector(
  ".merch__header--search-container"
);
const merchCardsContainer = document.querySelector(".merch__container");
const cardDetail = document.createElement("div");

const selectButton = document.querySelector("#filter");
const filterOptions = document.querySelectorAll("option");
const filterOptionsArray = Array.from(filterOptions);

const addToCartButton = document.createElement("button");
const closeCardButton = document.createElement("button");

//Creating the array for the merch
const merch = [
  {
    name: "Embers - white t",
    image: "../src/assets/images/products/embers-wht.jpg",
    price: 250,
    info: "Designed by Daria, made by Black Diamond Clothing, our tshirt features a custom skull inspired by our song 'Embers'",
    id: "embers__tshirt-wht",
    sizes: ["small", "medium", "large", "xl"],
    type: "tshirt",
    isAvailable: true,
  },
  {
    name: "Embers - hoodie",
    image: "../src/assets/images/products/hoodie.jpg",
    price: 600,
    info: "Designed by Daria, made by Black Diamon Clothing, our hoodie features a custom skull inspired by our song 'Embers'",
    id: "embers-hoodie",
    sizes: ["small", "medium", "large", "xl"],
    type: "hoodie",
    isAvailable: true,
  },
  {
    name: "Embers - black t",
    image: "../src/assets/images/products/embers-blck.jpg",
    price: 250,
    info: "Designed by Daria, made by Black Diamon Clothing, our tshirt features a custom skull inspired by our song 'Embers'",
    id: "embers__tshirt-blck",
    sizes: ["small", "medium", "large", "xl"],
    type: "tshirt",
    isAvailable: true,
  },
  {
    name: "Dawn - black t",
    image: "../src/assets/images/products/dawn-tshirt.jpg",
    price: 200,
    info: "Designed by us, made by Diger Distro, our tshirt features our own take on the 'Delta' symbol used on our EP 'Dawn'",
    id: "dawn__tshirt-blck",
    sizes: ["small", "medium", "large", "xl"],
    type: "tshirt",
    isAvailable: true,
  },
  {
    name: "Patch",
    image: "../src/assets/images/products/patch.jpg",
    price: 50,
    info: "Our own logo sewed onto a black patch with high quality stitching",
    id: "patch",
    sizes: [],
    type: "misc",
    isAvailable: true,
  },
  {
    name: "AMP - cd",
    image: "../src/assets/images/products/AMP-cd.png",
    price: 200,
    info: "A collectors CD with all bands signed on Braak Records",
    id: "amp-cd",
    sizes: [],
    type: "misc",
    isAvailable: true,
    url: "https://braakrecords.com/",
  },
];
//Creating an array for the merch that the user clicks on
const cart = [];

//Function for creating the cards
function createMerchCards(merch) {
  merch.forEach((card) => {
    const merchCard = document.createElement("div");
    merchCard.classList.add("merch__card");
    merchCard.setAttribute("id", card.id);

    const merchImage = document.createElement("img");
    merchImage.setAttribute("src", card.image);
    merchImage.setAttribute("alt", card.info);
    merchImage.classList.add("merch__image");

    const merchPrice = document.createElement("p");
    merchPrice.textContent = `${card.price}kr`;
    merchPrice.classList.add("merch__price");

    const merchInfo = document.createElement("p");
    merchInfo.textContent = card.info;
    merchInfo.classList.add("merch__info");

    //Creating selector element
    const sizeSelector = document.createElement("select");
    sizeSelector.setAttribute("id", "merchsize");
    sizeSelector.classList.add("merch__size-selector");

    const merchSizeSmall = document.createElement("option");
    merchSizeSmall.setAttribute("value", "small");
    merchSizeSmall.textContent = "Small";

    const merchSizeMedium = document.createElement("option");
    merchSizeMedium.setAttribute("value", "medium");
    merchSizeMedium.textContent = "Medium";

    const merchSizeLarge = document.createElement("option");
    merchSizeLarge.setAttribute("value", "large");
    merchSizeLarge.textContent = "Large";

    const merchSizeXl = document.createElement("option");
    merchSizeXl.setAttribute("value", "xl");
    merchSizeXl.textContent = "Xl";

    //Appending
    sizeSelector.append(
      merchSizeSmall,
      merchSizeMedium,
      merchSizeLarge,
      merchSizeXl
    );
    merchCard.append(merchImage, merchPrice);
    merchCardsContainer.appendChild(merchCard);

    //Adding eventlistener
    merchCard.addEventListener("click", () => openItemDetail(card));
  });
}

//Function for rendering a modal with the merch that the user clicked on
function openItemDetail(card) {
  cardDetail.textContent = "";

  cardDetail.classList.remove("hidden-card");

  cardDetail.classList.add("active-card");

  const cardDetailImg = document.createElement("img");
  cardDetailImg.setAttribute("src", `${card.image}`);

  const cardDetailName = document.createElement("h3");
  cardDetailName.textContent = `${card.name}`;

  const sizeSelector = document.createElement("select");
  sizeSelector.setAttribute("id", "sizeSelector");
  card.sizes.map((size) => {
    const sizeOption = document.createElement("option");

    sizeOption.textContent = `${size}`;

    sizeSelector.append(sizeOption);
  });

  const quantityLabel = document.createElement("label");
  quantityLabel.setAttribute("for", "quantity");
  quantityLabel.textContent = "Qty:";

  const quantityInput = document.createElement("input");
  quantityInput.setAttribute("type", "number");
  quantityInput.setAttribute("id", "quantity");
  quantityInput.setAttribute("min", 1);
  quantityInput.setAttribute("value", 1);

  const cardDetailPrice = document.createElement("p");

  cardDetailPrice.textContent = `${card.price}kr`;
  quantityInput.addEventListener("change", () => {
    cardDetailPrice.textContent = `${card.price * quantityInput.value}kr`;
  });

  quantityLabel.appendChild(quantityInput);

  addToCartButton.textContent = "Add to cart";

  closeCardButton.classList.add("close-button");
  closeCardButton.textContent = "X";

  cardDetail.append(
    cardDetailName,
    cardDetailImg,
    sizeSelector,
    quantityLabel,
    cardDetailPrice,
    addToCartButton,
    closeCardButton
  );

  addToCartButton.addEventListener("click", () => {
    cart.push(card);
    cart.push(sizeSelector.value);
    cart.push(quantityInput.value);
    console.log(cart);
  });

  merchCardsContainer.append(cardDetail);
}

//Function that closes the detailed product view
closeCardButton.addEventListener("click", (e) => {
  cardDetail.classList.remove("active-card");
  cardDetail.classList.add("hidden-card");
});

//function for sorting the products
const filterMerch = (e) => {
  merchCardsContainer.textContent = "";
  let merchFiltered = [...merch];

  const filterType = e.target.value;
  if (filterType === "hoodie") {
    merchFiltered = merchFiltered.filter(
      (merchItem) => merchItem.type === "hoodie"
    );
  } else if (filterType === "tshirt") {
    merchFiltered = merchFiltered.filter(
      (merchItem) => merchItem.type === "tshirt"
    );
  } else if (filterType === "misc") {
    merchFiltered = merchFiltered.filter(
      (merchItem) => merchItem.type === "misc"
    );
  } else {
    merchFiltered = [...merch];
  }
  createMerchCards(merchFiltered);
};

window.addEventListener("DOMContentLoaded", createMerchCards(merch));

selectButton.addEventListener("change", filterMerch);
