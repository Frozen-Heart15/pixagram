import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

function ImageGrid({setSelectedImage}) {
    const {docs} = useFirestore('images');
    //console.log(docs)

    return (
        <div className="imgGrid">
            {docs && docs.map(doc => (
                <motion.div className="imgWrap" 
                layout
                whileHover={{opacity:1}} key={doc.id}>
                    <img src={doc.url} alt="gallery"
                    onClick={()=>setSelectedImage(doc.url)}/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
