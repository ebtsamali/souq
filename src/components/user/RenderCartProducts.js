import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Media } from 'reactstrap';
import '../../styles/cart.scss';
import { addProductToCart, removeProductFromCart } from '../../actions/CartProducts';

const RenderCartProducts = (props) => {
   const { cartProducts, dispatch } = props;

   const handleAddProduct = (product) => {
      dispatch(addProductToCart(product));
      return (
         <Redirect to="/user/cart" />
      );
   }

   const handleRemoveProduct = (product) => {
      dispatch(removeProductFromCart(product));
      return (
         <Redirect to="/user/cart" />
      );
   }

   return(
      cartProducts.map(product => {
         return(
            <Media className="mt-5 product-card" key={product.product.id}>
               <Media left className="mr-5">
                  <Media object style={{width: "120px"}} src={'../../../img/'+product.product.image} alt={product.product.name} />
               </Media>
               <Media body right>
                  <Media heading>
                     {product.product.name}
                  </Media>
                  <span className="product-price"> {product.product.price + ' EGP'} </span>
                  <br /><br />
                  <span className="product-quantity"> { 'Quantity: ' + product.quantity} </span>
               </Media>
               <Media right className="mr-5">
                  <i className="material-icons add-icon" onClick={() => handleAddProduct(product)}>add</i>
                  <i className="material-icons remove-icon" onClick={() => handleRemoveProduct(product)}>delete</i>
               </Media>
            </Media>
         );
      })
   );
}

export default withRouter(RenderCartProducts);