import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {TextField, Button} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import {firebase} from '../firebase/config';
import { useState } from 'react';

const useStyles = makeStyles(theme=>({

    login:{
        margin: "80px auto",
        width:"400px",
    },
    innerLogin:{
        border:'solid 1px #cccccc',
        padding:'20px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:'10px',
        boxShadow:'1px 1px 8px 3px rgba(0,0,0,0.1)',
    }
}))

function Login() {

  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({email:'',password:''})
  const history = useHistory();  

  const handleForm = (e)=>{
      e.preventDefault();
      setIsLoading(true);

      firebase.auth().signInWithEmailAndPassword(form.email, form.password)
      .then(res=>{
          console.log(res);
          setIsLoading(false);
          //setIsLoggedIn(true);
          history.replace("/");
      })
      .catch(function(error) {
        // Handle Errors here.
       // var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
      });
  }

  const handleChange= (e)=>{
      setForm({...form, [e.target.name]:e.target.value})
  }

//   if(isLoggedIn) return <Redirect to="/" />

    return (
        <div className={classes.login}>
            <div className={classes.innerLogin}>
            <h1 style={{color: 'pink',
                  fontSize: '1.7rem',
                  letterSpacing: '2px',
                  fontWeight: 'bold',textDecoration:"none"}} >PixaGram</h1>
          {error !== "" && <p style={{color:'red'}}>{error}</p>}

        <form onSubmit={handleForm} autoComplete="off" > 
            <TextField type="email" name="email" size="small" style={{width:"300px"}} 
            value={form.email} onChange={handleChange} variant="outlined" placeholder="Email" /> 
            
            <TextField type="password" name="password" size="small" style={{width:"300px"}} 
            value={form.password} onChange={handleChange} variant="outlined" placeholder="Password" />
            
            <Button type="submit" variant="contained" color="primary" style={{width:"300px"}}>
                {isLoading? '...':'Login'}
            </Button>
            </form>
            </div>
            
            <div className={classes.innerLogin} style={{marginTop:'10px'}}>
               <p> Don't have an account? <Link to="/register" style={{textDecoration:'none',color:'blue'}} >Sign up</Link> </p>
            </div>
        </div>
    )
}

export default Login
