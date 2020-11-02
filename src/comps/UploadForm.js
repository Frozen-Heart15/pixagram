import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles'
import ProgressBar from './ProgressBar';

const useStyles = makeStyles(theme =>({
    err:{
        color:"red",
    },
    file:{
        color:"green",
    }
}))

const UploadForm = ()=>{

    const classes = useStyles();
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types= ['image/png','image/jpeg','image/jpg'];

    const changeHandler = (e)=>{
        let selected = e.target.files[0];
    
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
            console.log('selected')
        }else{
            setFile(null);
            setError('Please select an image file (jpeg/png).');
            console.log('error')

        }

    }

    return(
        <form>
            <label>
            <input type="file" onChange={changeHandler} />
            <span>+</span>
            </label>

            <div className="output">
            {error && <p className={classes.err}>{error}</p>}
            {file && <p className={classes.file}>{file.name}</p>}
            {file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    )
}

export default UploadForm;