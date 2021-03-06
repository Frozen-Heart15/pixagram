import React, {useState} from 'react'
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

function Home() {
  
    const [selectedImage, setSelectedImage] = useState(null);

    return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImage={setSelectedImage}/>
     {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> } 
    </div>
    )
}

export default Home
