import { cart, updateCartQuantity } from "./addToCart.js";

updateCartQuantity();

let checkoutSummary = "";
cart.forEach((cartItem) => {
  checkoutSummary += ` <div class="checkout-items-bg">
                  <div class="checkout-items">
                    <p>${cartItem.productName} <i class="fa-solid fa-xmark"></i> ${cartItem.quantity}</p>
                    <p>$${cartItem.price}.00</p>
                  </div>
                  </div>`;
});

document.querySelector(".your-order-body").innerHTML = checkoutSummary;

function updateCheckoutPrice() {
  let total = 0;

  cart.forEach((cartItem) => {
    const checkoutPrice = cartItem.price;
    const checkoutQuantity = cartItem.quantity;
    const subtotal = checkoutPrice * checkoutQuantity;
    total += subtotal;
  });

  document.querySelector(".checkout-js-subtotal").innerHTML = `$${total.toFixed(
    2
  )}`;
  document.querySelector(".checkout-js-total").innerHTML = `$${total.toFixed(
    2
  )}`;
}

updateCheckoutPrice();

// Billing Details Form
const checkbox1 = document.querySelector("#checkbox1");
checkbox1.addEventListener("click", () => {
  const createAccount = document.querySelector(".create-account");

  if (createAccount.style.display == "block") {
    createAccount.style.display = "none";
  } else {
    createAccount.style.display = "block";
  }
});

const checkbox2 = document.querySelector("#checkbox2");
checkbox2.addEventListener("click", () => {
  const shippingAddress = document.querySelector(".shipping-address");

  if (shippingAddress.style.display == "block") {
    shippingAddress.style.display = "none";
  } else {
    shippingAddress.style.display = "block";
  }
});

function validation() {
  const firstName = document.form.firstName.value;
  const lastName = document.form.lastName.value;
  const address = document.form.address.value;
  const state = document.form.state.value;
  const postal = document.form.postal.value;
  const email = document.form.email.value;
  const at = email.indexOf("@");
  const dot = email.lastIndexOf(".");
  const phone = document.form.phone.value;

  if (firstName == "") {
    document.querySelector(".firstName-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".firstName-input").style.border =
      "1px solid #6a6a6a";
  }

  if (lastName == "") {
    document.querySelector(".lastName-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".lastName-input").style.border =
      "1px solid #6a6a6a";
  }

  if (address == "") {
    document.querySelector(".address-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".address-input").style.border = "1px solid #6a6a6a";
  }

  if (state == "") {
    document.querySelector(".state-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".state-input").style.border = "1px solid #6a6a6a";
  }

  if (postal == "") {
    document.querySelector(".postal-input").style.border = "1px solid red";
    return false;
  }

  if (isNaN(postal)) {
    document.querySelector(".postal-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".postal-input").style.border = "1px solid #6a6a6a";
  }

  if (email == "") {
    document.querySelector(".email-input").style.border = "1px solid red";
    return false;
  }

  if (at < 1 || dot - at < 2) {
    document.querySelector(".email-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".email-input").style.border = "1px solid #6a6a6a";
  }

  if (phone == "") {
    document.querySelector(".phone-input").style.border = "1px solid red";
    return false;
  }

  if (isNaN(phone)) {
    document.querySelector(".phone-input").style.border = "1px solid red";
    return false;
  } else {
    document.querySelector(".phone-input").style.border = "1px solid #6a6a6a";
  }
}
