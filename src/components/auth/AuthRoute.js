import React from 'react';
import { Route, Redirect } from 'react-router';

const AuthRoute = (props) => {
   let user = JSON.parse(localStorage.getItem("user"));
   if (user) {
      if (props.path === '/login') {
         return <Redirect to='/home' />
      } else {
         return <Route {...props} />
      }
   } else {
      return <Redirect to="/log--in" />
   }
}

export default AuthRoute;