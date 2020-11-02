import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
  heading1:{
    color: '#efb6b2',
    fontSize: '1.2rem',
    letterSpacing: '2px',
    fontWeight: 'normal',
  },
  heading2:{
    marginTop: '60px',
  fontSize: '2.6rem',
  textAlign:'center',
  },
  subText:{
  textAlign:'center',
  }
}))

const Title = () => {

  const classes = useStyles();

  return (
    <div >
      <h1 className={classes.heading1}>PixaGram</h1>
      <h2 className={classes.heading2} >Your Pictures</h2>
      <p className={classes.subText} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;