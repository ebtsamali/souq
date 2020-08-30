import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../styles/home.scss';
import { addProductToCart } from '../../actions/CartProducts';

const ProductCard = (props) => {
   const { product, dispatch } = props;

   const addToCart = (product) => {
      dispatch(addProductToCart({product, quantity: 1}));
   }

   return (
      <div className="card-div">
         <Card className="card">
            <CardImg top className="card-img" src={'../../../img/'+product.image} alt="product picture" />
            <CardBody>
               <CardTitle style={{color: "black"}}>{product.name}</CardTitle>
               <CardTitle className="card-title">
                  {product.price} EGP
                  <a className="cart-icon" onClick={() => addToCart(product)}><FontAwesomeIcon className="icon" color="#ccc" size="2x" icon={faShoppingCart} /></a>
               </CardTitle>
            </CardBody>
         </Card>
      </div>
   );
}

export default withRouter(ProductCard);