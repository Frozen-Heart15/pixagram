import React from 'react';
import { useContext } from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import {firebase} from '../firebase/config';
import AppContext from '../store/AppContext';

function Navbar() {

    const history = useHistory()
    const [isLoggedIn] = useContext(AppContext);

    const logout = ()=>{
        firebase.auth().signOut().then(res=>{
            //setIsLoggedIn(false);
            history.replace('/login')
        }).catch(err=>{
            console.log(err)
        })
    }



    return (
        <nav style={{ background:"#f9f9f9",margin:"0", display:'flex',justifyContent:'space-between'}}>
            <ul type="none" style={{margin:'0'}}>
                <li>
      <h1  ><NavLink to="/" style={{color: '#efb6b2',
                  fontSize: '1.7rem',
                  letterSpacing: '2px',
                  fontWeight: 'bold',textDecoration:"none"}} >PixaGram</NavLink></h1>
                </li>
            </ul>

            <ul type="none" style={{display:'flex',alignItems:"center",margin:'0'}} >
                <li style={{marginRight:"20px"}}>
              {isLoggedIn? ( <p  style={{textDecoration:"none",color:"black"}} onClick={logout} >
                    Logout
                    </p>
                    ):( 
                        <NavLink to="/login" style={{textDecoration:"none",color:"black"}} activeStyle={{fontWeight:"bold"}}>
                    Login
                    </NavLink>)}     
                    </li>
                <li style={{marginRight:"20px"}}>
                  {!isLoggedIn &&  <NavLink to="/register" style={{textDecoration:"none",color:"black"}} activeStyle={{fontWeight:"bold"}} >
                        Sign up
                    </NavLink> }
                    </li>
            </ul>
        </nav>
    )
}

export default Navbar
