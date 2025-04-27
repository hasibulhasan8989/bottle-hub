const checkStoredCard = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else return [];
};

const getTheCart = (id) => {
  const cart = checkStoredCard();

  cart.push(id);
  setTheCart(cart);
};

const setTheCart = (cart) => {

  const setCart = JSON.stringify(cart);
  localStorage.setItem("cart", setCart);
};

export {getTheCart}