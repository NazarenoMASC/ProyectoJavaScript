const cart = document.getElementById("carrito");
const addedCards = document.querySelectorAll(".product");
const buyBtn = document.querySelector("#compra");
const cartCardsAdded = document.querySelector(".cart-container");
const emptyCartBtn = document.getElementById("vaciar-carrito");
const addAllProductsBtn = document.getElementById("add-all-products");

cargarEventos();

function cargarEventos() {
  addedCards.forEach((addButton) => {
    addButton.addEventListener("click", addToCart);
  });
  buyBtn.addEventListener("click", (e) => {
    Swal.fire({
      icon: "success",
      title: "Felicitaciones!",
      text: "Tu compra ha sido procesada!",
    });
    emptyCart(e);
  });
  cart.addEventListener("click", (e) => {
    deleteProduct(e);
  });
  emptyCartBtn.addEventListener("click", (e) => {
    emptyCart(e);
  });

  addAllProductsBtn.addEventListener("click", (e) => {
    addAllProducts(e);
  });
  document.addEventListener("DOMContentLoaded", ReadLocalStorage());
}

function addToCart(e) {
  const button = e.target;
  const card = button.closest(".cards");
  readProduct(card);
}

function readProduct(card) {
  const infoProducto = {
    imagen: card.querySelector("img").src,
    titulo: card.querySelector("h3").textContent,
    precio: card.querySelector("p").textContent,
    id: card.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  let productsLS;
  productsLS = getProductsLocalStorage();
  productsLS.forEach(function (productLS) {
    if (productLS.id === infoProducto.id) {
      productsLS = productLS.id;
    }
  });
  if (productsLS === infoProducto.id) {
    console.log("producto ya agregado");
  } else {
    addCardToCart(infoProducto);
  }
  saveProductsLocalStorage(infoProducto);
}

function addCardToCart(card) {
  const cartDiv = document.createElement("div");

  const divCreatedCart = `
            <div class="cart-flex-row">
                <h3> ${card.titulo} </h3>
                <img src=${card.imagen} alt="imagen">
                <p> ${card.precio} </p>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${card.id}"></a>
            </div>

       
            `;
  cartDiv.innerHTML = divCreatedCart;
  cartCardsAdded.appendChild(cartDiv);
}

function deleteProduct(e) {
  e.preventDefault();
  let product, productID;
  if (e.target.classList.contains("borrar-producto")) {
    e.target.parentElement.parentElement.remove();
    product = e.target.parentElement.parentElement;
    productID = product.querySelector("a").getAttribute("data-id");
  }
  deleteProductLocalStorage(productID);
}

function emptyCart(e) {
  e.preventDefault();
  while (cartCardsAdded.firstChild) {
    cartCardsAdded.removeChild(cartCardsAdded.firstChild);
  }
  EmptyLocalStorage();
  return false;
}

function saveProductsLocalStorage(e) {
  let productos;
  productos = getProductsLocalStorage();
  productos.push(e);
  localStorage.setItem("productos", JSON.stringify(productos));
}

function getProductsLocalStorage() {
  let productLS;
  if (localStorage.getItem("productos") === null) {
    productLS = [];
  } else {
    productLS = JSON.parse(localStorage.getItem("productos"));
  }
  return productLS;
}

function deleteProductLocalStorage(productID) {
  let productsLS;
  productsLS = getProductsLocalStorage();
  productsLS.forEach(function (productLS, index) {
    if (productLS.id === productID) {
      productsLS.splice(index, 1);
    }
  });
  localStorage.setItem("productos", JSON.stringify(productsLS));
}
function ReadLocalStorage() {
  let productLS;
  productLS = getProductsLocalStorage();
  productLS.forEach(function (card) {
    const cartDiv = document.createElement("div");

    const divCreatedCart = `
            <div class="cart-flex-row">
                <h3> ${card.titulo} </h3>
                <img src=${card.imagen} alt="imagen">
                <p> ${card.precio} </p>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${card.id}"></a>
            </div>

       
            `;
    cartDiv.innerHTML = divCreatedCart;
    cartCardsAdded.appendChild(cartDiv);
  });
}
function EmptyLocalStorage() {
  localStorage.clear();
}
async function addAllProducts() {
  const URL = "./data.json";
  const res = await fetch(URL);
  const data = await res.json();
  data.forEach((e) => {
    const div = document.createElement("div");
    const productos = `
            <div class="cart-flex-row">
                <h3> ${e.titulo} </h3>
                <img src=${e.imagen} alt="imagen">
                <p> ${e.precio} </p>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${e.id}"></a>
            </div>

       
            `;
    div.innerHTML = productos;
    root.appendChild(div);
    saveProductsLocalStorage(e);
  });
}
