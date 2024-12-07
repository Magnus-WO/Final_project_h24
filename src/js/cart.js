//Fetching elements from html
const cart = document.querySelector(".cart");
const productsContainer = document.querySelector(".cart__products");
const orderForm = document.querySelector(".cart__customer-details");

const addressInput = document.querySelector("#address");
const zipInput = document.querySelector("#zip");
const cityInput = document.querySelector("#city");

const paymentSelector = document.querySelector("#payment__selector");
const paymentTotal = document.querySelector(".payment__total");
const orderButton = document.querySelector(".order-button");

//Global variables
const exitButton = document.createElement("button");
const feedBackModal = document.createElement("div");

let cartArray = [];

//Function for getting items from localStorage
function getCart() {
  cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
}

//Function for removing items from cart
const removeProduct = (id) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItem"));
  const remainingItems = cartItems.filter((product) => product.id !== id);
  localStorage.setItem("cartItem", JSON.stringify(remainingItems));
  cartArray = remainingItems;
  renderCart();
  totalPrice();
};

//Function for rendering cart items
function renderCart() {
  productsContainer.textContent = "";
  cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];

  if (cartArray.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Your cart is empty.";
    productsContainer.appendChild(emptyMessage);
    paymentTotal.textContent = "Your total is 0 kr";
    return;
  }

  cartArray.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("cart__product-card");

    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.img);
    productImage.classList.add("product__image");

    const productName = document.createElement("h4");
    productName.textContent = product.name;

    const productInputContainer = document.createElement("div");
    productInputContainer.classList.add("cart__product-card--input");

    const productInputLabel = document.createElement("label");
    productInputLabel.setAttribute("for", "product__quantity");
    productInputLabel.textContent = "Qty:";

    const productInputQuantity = document.createElement("p");
    // productInputQuantity.setAttribute("type", "number");
    productInputQuantity.textContent = product.quantity;

    const productSize = document.createElement("p");
    productSize.textContent = product.size;

    const productPrice = document.createElement("h4");
    productPrice.classList.add("product__prize");
    productPrice.textContent = `${product.price}kr`;

    const removeButton = document.createElement("button");
    removeButton.classList.add("product__remove-button");
    removeButton.textContent = "remove";

    removeButton.addEventListener("click", () => removeProduct(product.id));

    //Appending the elements
    productInputContainer.append(productInputLabel, productInputQuantity);

    productCard.append(
      productImage,
      productName,
      productInputContainer,
      productSize,
      productPrice,
      removeButton
    );

    productsContainer.append(productCard);
  });
}

//Function for summing together prices
function totalPrice() {
  let cartTotal = 0;

  cartArray = JSON.parse(localStorage.getItem("cartItem")) || [];
  cartArray.forEach((item) => {
    cartTotal += item.price;
  });

  paymentTotal.textContent = `Your total is ${cartTotal} kr`;
}

//Function for submitting the order
const placeOrder = (e) => {
  e.preventDefault();
  orderForm.reset();

  feedBackModal.classList.add("cart__feedback");
  feedBackModal.classList.remove("remove-feedback-modal");

  feedBackModal.textContent = "";

  if (cartArray.length === 0) {
    const feedBackMessage = document.createElement("p");

    const feedBackMessageContainer = document.createElement("div");
    feedBackMessageContainer.classList.add("feedback__message-container");

    feedBackMessage.textContent =
      "We appreciate that you are eager to shop from us, but the cart is empty, no order has been placed :)";

    exitButton.classList.add("cart__feedback--exit-button");
    exitButton.textContent = "X";

    feedBackMessageContainer.append(feedBackMessage);
    feedBackModal.append(feedBackMessageContainer, exitButton);
    cart.append(feedBackModal);

    return;
  }

  const feedBackMessageContainer = document.createElement("div");
  feedBackMessageContainer.classList.add("feedback__message-container");

  const feedBackMessage1 = document.createElement("p");
  feedBackMessage1.textContent = "Thank you for your order!";
  const feedBackMessage2 = document.createElement("p");
  feedBackMessage2.textContent =
    " We will send it as soon as possible together with a free sticker.";
  const feedBackMessage3 = document.createElement("p");
  feedBackMessage3.textContent =
    "Please come and say hi to us at our next show!";

  exitButton.classList.add("cart__feedback--exit-button");
  exitButton.textContent = "X";

  feedBackMessageContainer.append(
    feedBackMessage1,
    feedBackMessage2,
    feedBackMessage3
  );
  feedBackModal.append(feedBackMessageContainer, exitButton);
  cart.append(feedBackModal);

  localStorage.clear();
  productsContainer.textContent = "Your order has been placed :)";
};

//Closing feedback modal
const closeFeedback = () => {
  feedBackModal.classList.add("remove-feedback-modal");
  feedBackModal.classList.remove("cart__feedback");
};

//Calling functions
window.addEventListener("DOMContentLoaded", () => {
  getCart();
  renderCart();
  totalPrice();
});
orderButton.addEventListener("click", placeOrder);
exitButton.addEventListener("click", closeFeedback);
