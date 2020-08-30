import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header';
import '../../styles/cart.scss';
import RenderCartProducts from './RenderCartProducts';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { removeAllCartProducts } from '../../actions/CartProducts';

const Cart = (props) => {
   const { cartProducts } = props;
   const [ modal, setModal ] = useState(false);

   const toggle = () => setModal(!modal);

   const totalPrice = () => {
      let price = 0;
      cartProducts.map(product => {
         price = price+(product.product.price*product.quantity);
         return price;
      })
      return price;
   }

   const handleOrderConfirmation = () => {
      props.dispatch(removeAllCartProducts());
      toggle();
   }

   return(
      <div>
         <Header />
         <div className="container x-container-cart">
            {
               cartProducts.length === 0 
               ?  <div className="empty-cart-container">
                     <img src="../../../../img/empty-cart.png"/>
                     <h2>Your cart is empty!</h2>
                     <Link to="/home" style={{textDecorationColor: "#4ABBA9"}}><h5>Add Products To Cart</h5></Link>
                  </div> 
               :  <div className="row row-content">
                     <div className="col-10">
                        <RenderCartProducts cartProducts={cartProducts} dispatch={props.dispatch}/>
                     </div>
                     <div className="col-10">
                        <Button className="order-btn" onClick={toggle}> Order </Button>
                        <Modal isOpen={modal} toggle={toggle} >
                           <ModalHeader toggle={toggle}>Order Confirmation</ModalHeader>
                           <ModalBody>
                              Total Price: {totalPrice()} EGP
                           </ModalBody>
                           <ModalFooter>
                              <Button color="primary" onClick={handleOrderConfirmation}>Confirm</Button>{' '}
                              <Button color="secondary" onClick={toggle}>Cancel</Button>
                           </ModalFooter>
                        </Modal>
                     </div>
               </div>
            }
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      cartProducts: state.cartProductsReducer
   }
}

export default connect(mapStateToProps)(Cart);