var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100)
 item.push({ itemName: name, itemPrice: price})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var string = "In your cart, you have "
  var length = cart.length;
  if(length === 0){
    return "Your shopping cart is empty."
  }
  for(var i = 0; i < length; i++){
    if(i == length - 1 && i !== 0){
      string += "and "
    }
    string += `${cart[i].itemName} + at $${cart[i].itemPrice}`;
    punctuation = (i == length - 1) ? "." : ",";
    string += punctuation
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
