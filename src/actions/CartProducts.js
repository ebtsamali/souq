export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ROMOVE_ALL_CART_PRODUCTS = 'ROMOVE_ALL_CART_PRODUCTS';

export const addProductToCart = (product) => {
   return {
      type: ADD_TO_CART,
      product
   }
}

export const removeProductFromCart = (product) => {
   return {
      type: REMOVE_FROM_CART,
      product
   }
}

export const removeAllCartProducts = () => {
   return {
      type: ROMOVE_ALL_CART_PRODUCTS
   }
}