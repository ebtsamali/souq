import { createStore, combineReducers,applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/Products';
import cartProductsReducer from '../reducers/CartProducts';

export default () => {
   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   const store = createStore(
      combineReducers({
         productsReducer,
         cartProductsReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
   );

   return store;
}