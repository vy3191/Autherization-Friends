import React from 'react';
import {ACCESS_TOKEN} from '../constants/constant';
import { Redirect } from 'react-router-dom';

function Logout(props) { 
      localStorage.removeItem(ACCESS_TOKEN);
      return <Redirect to="/login" /> 
}

export default Logout;
