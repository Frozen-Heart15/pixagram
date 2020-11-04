import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {TextField, Button} from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import { Formik} from 'formik';
import * as Yup from 'yup';
import {firebase} from '../firebase/config';

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

function Signup() {

  const classes = useStyles();
    const history = useHistory();
//   const formik = useFormik({
     
//   });

    return (
        <Formik
        initialValues={{email:'',name:'',password:""}}
      onSubmit= {(value, formikBag)=>{
        firebase.auth().createUserWithEmailAndPassword(value.email,value.password).then(res=>{
           console.log(value)
            history.replace('/');
        }).catch(err=>{
            formikBag.setFieldError('password',err.message)
        })
      }}
      validationSchema= {Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required().email('Invalid Email'),
        password: Yup.string().required().min(6)
      })}
        > 
        {formik=>(
            <div className={classes.login}>
            <div className={classes.innerLogin}>
            <h1 style={{color: 'pink',
                  fontSize: '1.7rem',
                  letterSpacing: '2px',
                  fontWeight: 'bold',textDecoration:"none"}} >PixaGram</h1>
        <form onSubmit={formik.handleSubmit} style={{display:'flex',flexDirection:'column',gap:'10px'}} >
            <TextField type="text" name="name" size="small" style={{width:"300px"}}
             variant="outlined"  placeholder="Name"
             value={formik.values.name}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              /> 
              {formik.errors.name && <p>{formik.errors.name}</p> }

            <TextField type="email" name="email" size="small" style={{width:"300px"}}
             variant="outlined" placeholder="Email"
             value={formik.values.email}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur} /> 
            
             {formik.errors.email && <p>{formik.errors.email}</p> }

            <TextField type="password"  size="small" 
            style={{width:"300px"}} variant="outlined" placeholder="Password"
            helperText={formik.errors.password}
            {...formik.getFieldProps('password')}
             />

             {/* {formik.errors.password && <p>{formik.errors.password}</p> } */}


            <Button variant="contained" type="submit" color="primary" style={{width:"300px"}}>Sign up</Button>
            </form>
            </div>
            <div className={classes.innerLogin} style={{marginTop:'10px'}}>
               <p> Already have an account? <Link to="/login" style={{textDecoration:'none',color:'blue'}} >Login</Link> </p>
            </div>
        </div>

        )}
                </Formik>
    )
}

export default Signup;
