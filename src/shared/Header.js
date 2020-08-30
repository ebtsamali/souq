import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/header.scss';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import UserServices from '../services/UserServices';

const Header = (props) => {

   const handleLogout = () => {
      UserServices.logout();
      props.history.push('/login');
   }

   return (
      <div className="header">
         <div className="nav-container">
               <ul>
                  <li className="nav-list">
                     <Link to="/home">Home</Link>
                  </li>
               </ul>
         </div>
         <div className="right-nav" >
            <div className="ml-3">
               <Link to="/user/cart"><FontAwesomeIcon color="#ffffff" size="2x" icon={faShoppingCart} /></Link>
            </div>
            <div className="logout-container">
               <ul>
                  <li className="logout-list"><a style={{color: "white"}} onClick={handleLogout}>Logout</a></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default withRouter(Header)
