import React, { useState } from 'react';
import '../../styles/login.scss';
import ErrorMessage from '../../shared/ErrorMessage';
import UserServices from '../../services/UserServices';
import { withRouter } from 'react-router';

const Login = (props) => {
   const [ email, setEmail ] = useState("");
   const [ password, setPassword ] = useState("");
   const [ errors, setErrors] = useState({});

   const handleError = () => {
      setErrors({});
      let errors = {};
      let errorExist = false;

      if(email === "") {
         errors.email = "Email is required";
         errorExist = true;
      }

      if(password === "") {
         errors.password = "password is required";
         errorExist = true;
      }

      if(errorExist) {
         setErrors(errors)
      }
   }

   const handleLogin = () => {
      if (email === "" || password === "") {
         handleError();
      } else {
         UserServices.login(email, password);
         props.history.push('/home');
      }
   }

   return (
      <div className="login-page-container">
         <div className="right-container">
            <div className="login-card-mod">
               <h3>Login</h3>
               <input 
                  className="email-input-mod" 
                  placeholder="Email" 
                  type="text" 
                  value={email}
                  onChange={ (event) => setEmail(event.target.value) }
               />
               { errors.email && <ErrorMessage message={errors.email} /> }
               <input 
                  className="password-input-mod" 
                  placeholder="Password" 
                  type="password" 
                  value={password}
                  onChange={ (event) => setPassword(event.target.value) }
               />
               { errors.password && <ErrorMessage message={errors.password} /> }
               <button className="login-btn" onClick={ handleLogin }> LOGIN </button>
            </div>
         </div>
      </div>
   );
}

export default withRouter(Login);