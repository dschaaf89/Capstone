
import PropTypes from "prop-types";
import React, { useState } from 'react';

import { storage } from '../../firebase';
function ReusableForm(props) {
  console.log('reusable', props);  
  

  const [image, setImage ] = useState(null);
  const [url,setUrl]= useState("");
  const [progress,setProgress]=useState(0);

  const handleChange = e => {
    if(e.target.files.[0]){
      setImage(e.target.files.[0])
    }
  };
  const handleUpload = (e) => {
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
          });
      }
    )
  };



  return (
   
    <React.Fragment>
       <div>
        <progress value={progress} max="100"/>
          <br/>

          <input type="file" onChange={handleChange}/>
          <button onClick={handleUpload}>Upload</button>
          <br />
          {url}
          <br/>
      </div>
      <form onSubmit={props.formSubmissionHandler}>

        <input
          type='text'
          name='name'
          placeholder='Name'
          defaultValue={props.name}
        />
        <textarea
          name='ingredients'
          placeholder='ingredients'
          defaultValue={props.ingredients} />
        <textarea
          name='steps'
          placeholder='steps'
          defaultValue={props.steps} />
        <textarea
          name='description'
          placeholder='description'
          defaultValue={props.description} />
        <select id="type" name="type">
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>
        </select> 
        <input
          type='text'
          name='Url'
          placeholder='Url'
          defaultValue={url}
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;