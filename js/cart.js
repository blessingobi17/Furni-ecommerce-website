import {
  cart,
  removeFromCart,
  updateCartQuantity,
  updatePrice,
  increaseStorageQuantity,
  decreaseStorageQuantity,
} from "./addToCart.js";

updateCartQuantity();

let cartSummaryHTML = "";

cart.forEach((cartItem) => {
  cartSummaryHTML += `<div class="cart-items js-cart-items-${cartItem.id}">
        <img src="${cartItem.img}" class="cart-items-image" />
        <div class="cart-items-info">
          <h3>${cartItem.productName}</h3>
          <p>$${cartItem.price}.00</p>
          <div class="cart-items-quantity">
            <p>Quantity:</p>
            <div>
              <i class="fa-solid fa-minus js-minus-button" data-minus-id="${cartItem.id}"></i>
              <input type="text" value="${cartItem.quantity}" 
              class="js-quantity-selector-${cartItem.id} js-quantity-input" 
              data-input-id="${cartItem.id}"/>
              <i class="fa-solid fa-plus js-plus-button" data-plus-id="${cartItem.id}" ></i>
            </div>
          </div>
        </div>
        <div class="js-delete-link remove" data-cart-id="${cartItem.id}"><i class="fa-solid fa-xmark " ></i></div>
      </div>`;
});

document.querySelector(".js-cart-container").innerHTML = cartSummaryHTML;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const cartId = link.dataset.cartId;
    removeFromCart(cartId);
    const cartContainer = document.querySelector(`.js-cart-items-${cartId}`);
    cartContainer.remove();
    updateCartQuantity();
    updatePrice();
  });
});

document.querySelectorAll(".js-minus-button").forEach((minusBtn) => {
  minusBtn.addEventListener("click", () => {
    const minusId = minusBtn.dataset.minusId;
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${minusId}`
    );
    let quantity = Number(quantitySelector.value);
    if (quantity > 1) {
      quantity--;
    }
    quantitySelector.value = quantity;

    decreaseStorageQuantity(minusId, quantity);
  });
});

document.querySelectorAll(".js-plus-button").forEach((plusBtn) => {
  plusBtn.addEventListener("click", () => {
    const plusId = plusBtn.dataset.plusId;
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${plusId}`
    );

    const quantity = Number(quantitySelector.value) + 1;
    quantitySelector.value = quantity;

    increaseStorageQuantity(plusId, quantity);
  });
});

updatePrice();

document.querySelector(".update-button").addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let matchingItem;
  cart.forEach((cartItem) => {
    const inputId = cartItem.id;
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${inputId}`
    );
    const quantity = Number(quantitySelector.value);
    quantitySelector.value = quantity;

    if (cartItem.id === inputId) {
      matchingItem = cartItem;
    }
    if (matchingItem) {
      matchingItem.quantity = quantity;
    } else {
      0;
    }
  });

  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  document.querySelector(".cart-item-quantity").innerHTML = totalQuantity;

  updatePrice();

  localStorage.setItem("cart", JSON.stringify(cart));
});
