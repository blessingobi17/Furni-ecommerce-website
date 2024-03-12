export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      img: "images/product-1.png",
      price: 50,
      id: 11111,
      productName: "Product 1",
      quantity: 1,
      name: "Nordic Chair",
    },
    {
      img: "images/product-2.png",
      price: 78,
      id: 22222,
      productName: "Product 2",
      quantity: 1,
      name: "Kruzo Aero Chair",
    },
  ];
}

function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, productImg, productPrice, productName) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.id) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      quantity: 1,
      img: productImg,
      price: productPrice,
      productName: productName,
    });
  }

  saveToLocalStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".cart-item-quantity").innerHTML = cartQuantity;
}

export function removeFromCart(cartId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.id != cartId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToLocalStorage();
}

export function updatePrice() {
  let cartPrice = 0;

  cart.forEach((cartItem) => {
    const cartId = cartItem.id;
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${cartId}`
    );
    const quantity = Number(quantitySelector.value);
    cartPrice += Number(cartItem.price * quantity);
  });

  document.querySelector(".js-subtotal").innerHTML = `$${cartPrice.toFixed(2)}`;
  document.querySelector(".js-total").innerHTML = `$${cartPrice.toFixed(2)}`;
}

export function increaseStorageQuantity(plusId, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.id === plusId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity = quantity;
  } else {
    0;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function decreaseStorageQuantity(minusId, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.id === minusId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity = quantity;
  } else {
    0;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
