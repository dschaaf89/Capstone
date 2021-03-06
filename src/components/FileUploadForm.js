import React, { useState } from 'react';
import { storage } from '../firebase';

const ReactFirebaseFileUpload = (props) => {
  const [image, setImage ] = useState(null);
  const [url,setUrl]= useState("");
  const [progress,setProgress]=useState(0);

  const handleChange = e => {
    if(e.target.files.[0]){
      setImage(e.target.files.[0])
    }
  };
  const handleUpload = () => {
    const uploadTask =storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot=>{
        const progress = Math.round(
          (snapshot.bytesTransferred/snapshot.totalBytes)*100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () =>{
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url =>{
            console.log(url);
            
            setUrl(url);
            props.test(url)
          });
      }
    )
    console.log(props)
  
    
  };
  console.log('image',image);
return (
  <div className='fileUpload'>
   <progress value={progress} max="100"/>
    <br/>

    <input type="file" onChange={handleChange}/>
    <button onClick={handleUpload}>Upload</button>
  </div>
)
}

export default ReactFirebaseFileUpload;