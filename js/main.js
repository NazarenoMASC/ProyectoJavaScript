const addedCards = document.querySelectorAll(".cards");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
const btnComprar = document.querySelector("#compra");
const cartCardsAdded = document.querySelector(".cart-container");
cargarEventos();
addedCards.forEach((addButton) => {
  addButton.addEventListener("click", addToCart);
});
function cargarEventos() {
  vaciarCarritoBtn.addEventListener("click", (e) => {
    vaciarCarrito(e);
  });
}
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
  saveProductsLocalStorage(cardTitle, cardPrice, cardImg);
}
function saveProductsLocalStorage(cardTitle, cardPrice, cardImg) {
  let productos;
  productos = obtenerProductos();
  productos.push(cardTitle, cardPrice, cardImg);
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

function vaciarCarrito(e) {
  e.preventDefault();
  while (cartCardsAdded.firstChild) {
    cartCardsAdded.removeChild(cartCardsAdded.firstChild);
  }
  return false;
}

btnComprar.addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    title: "Felicitaciones!",
    text: "Tu compra ha sido procesada!",
  });
});
