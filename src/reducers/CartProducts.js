import { ADD_TO_CART, REMOVE_FROM_CART, ROMOVE_ALL_CART_PRODUCTS } from '../actions/CartProducts';

const cartProductsReducerDefualtState = [];

export default ( state = cartProductsReducerDefualtState, action ) => {
   switch(action.type) {
      case ADD_TO_CART:
         let checkExistance = state.filter(product => product.product.id === action.product.product.id);
         if (checkExistance.length === 0) {     
            return [
               ...state,{
                  product: action.product.product,
                  quantity: 1
               }
            ];
         } else {
            let newState = state.map(product => { 
               return( 
                  product.product.id === action.product.product.id 
                  ? {product: product.product, quantity: product.quantity+1} 
                  : product
               );
            });
            return newState; 
         }

      case REMOVE_FROM_CART:
         let filteredState = state.map(product => { 
            return( 
               product.product.id === action.product.product.id 
               ? {product: product.product, quantity: product.quantity-1} 
               : product
            );
         }).filter(product => product.quantity !== 0);
         return filteredState;

      case ROMOVE_ALL_CART_PRODUCTS: 
         return [];
         
      default:
         return state;
   }
}