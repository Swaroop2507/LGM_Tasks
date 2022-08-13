let cartItems = [];

export function getCartItems() {
  return cartItems;
}

export function addToCart(item) {
  cartItems = [...cartItems, item];
  console.log(cartItems);
}

export function removeFromCart(item) {
  cartItems = cartItems.filter((element) => {
    return element !== item;
  });

  console.log(cartItems);
}
