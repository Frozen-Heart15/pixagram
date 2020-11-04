import React, {useEffect, useState} from 'react';
//import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from './comps/Navbar';
import Home from './comps/Home';
import Login from './comps/Login';
import Singup from './comps/Singup';
import {firebase} from './firebase/config';
import AppContext from './store/AppContext';
import AuthRoute from './hooks/AuthRoute';

// const theme = createMuiTheme({
//   palette:{
//     // primary:{
//     //   main:'#efb6b2'
//     // },
//     secondary:{
//       main:'#4e4e4e'
//     },
//   error:{
//     main:'#ff4a4a'
//   }    
//   }
// })

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            setIsLoggedIn(true)
            setUser(user);
        }else{
          setUser({});
          setIsLoggedIn(false)
        }
    })    
        
    }, [setIsLoggedIn, setUser])

  return (
    <AppContext.Provider value={[isLoggedIn,user]} >
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <AuthRoute path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Singup} />
    </Switch>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
