import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {ACCESS_TOKEN} from '../constants/constant';

function ProtectedRoute(props) {
   const {component:Component, ...rest} = props;
   return(
     <Route {...rest} render={(protectedProps) => {
         if(JSON.parse(localStorage.getItem(ACCESS_TOKEN))) {
            return <Component {...protectedProps}/>
         } else {
            return <Redirect to="/login" />
         }
     }} />
   )
}

export default ProtectedRoute;