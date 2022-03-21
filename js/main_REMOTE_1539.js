const addedCards = document.querySelectorAll(".cards");

addedCards.forEach((addButton) => {
   addButton.addEventListener("click", addToCart);
});

const cartCardsAdded = document.querySelector(".cart-container");

function addToCart(event) {
  const button = event.target;
  const card = button.closest(".cards");

  const cardTitle = card.querySelector("h3").textContent;
  const cardPrice = card.querySelector("p").textContent;
  const cardImg = card.querySelector("img").src;

  addCardToCart(cardTitle, cardPrice, cardImg);
}

function addCardToCart(cardTitle, cardPrice, cardImg) {
  const cartDiv = document.createElement("div");

  const divCreatedCart = `
            <div class="cart-flex-row">
                <h3> ${cardTitle} </h3>
                <img src=${cardImg} alt="imagen">
                <p> ${cardPrice} </p>
            </div>

       
            `;
  cartDiv.innerHTML = divCreatedCart;
  cartCardsAdded.appendChild(cartDiv);

  saveProductsLocalStorage(cartCardsAdded);
}
function saveProductsLocalStorage(cartCardsAdded) {
  let productos;
  productos = obtenerProductos();
  productos.push(cartCardsAdded);
  localStorage.setItem("productos", JSON.stringify(productos));
}
function obtenerProductos() {
  let productoLS;
  if (localStorage.getItem("productos") === null) {
    productoLS = [];
  } else {
    productoLS = JSON.parse(localStorage.getItem("productos"));
  }
  return productoLS;
}

