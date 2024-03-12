import { addToCart, updateCartQuantity } from "./addToCart.js";
import { products } from "./product.js";

let shopHtml = "";

products.forEach((product) => {
  shopHtml += ` <div class="product">
            <div class="added-to-cart js-added-to-cart-${product.id}">
            <i class="fa-solid fa-check"></i>
            <h4>Added</h4> 
            </div>
            <img src="${product.img}" class="chairs" />
            <h3>${product.name}</h3>
            <p>$${product.price}.00</p>
             <div class="chair-hover">
              <div class="plus-button js-addToCart-button" 
              data-product-img="${product.img}"
              data-product-price="${product.price}"
              data-product-name="${product.productName}"
               data-product-id="${product.id}">
                <img src="images/cross.svg" />
              </div>
            </div>
          </div>`;
});

document.querySelector(".js-chair-collection").innerHTML = shopHtml;

updateCartQuantity();

document.querySelectorAll(".js-addToCart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    const productImg = button.dataset.productImg;
    const productPrice = button.dataset.productPrice;
    const productName = button.dataset.productName;

    addToCart(productId, productImg, productPrice, productName);
    updateCartQuantity();

    const addedToCart = document.querySelector(
      `.js-added-to-cart-${productId}`
    );
    addedToCart.style.display = "flex";
    setTimeout(() => {
      addedToCart.style.display = "none";
    }, 2000);
  });
});
