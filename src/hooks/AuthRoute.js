import React from 'react'
import { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AppContext from '../store/AppContext';

function AuthRoute(props) {

    const [isLoggedIn] = useContext(AppContext);

    if(isLoggedIn){
        return <Route {...props}/>
    }else{
      return  <Redirect to="/login"/>
    }

    
}

export default AuthRoute
