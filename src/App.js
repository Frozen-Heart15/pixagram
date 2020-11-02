import React,{useState} from 'react';
import Title from './comps/Title';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#efb6b2'
    },
    secondary:{
      main:'#4e4e4e'
    },
  error:{
    main:'#ff4a4a'
  }    
  }
})

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
     {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> } 
    </div>
    </ThemeProvider>
  );
}

export default App;
