
import PropTypes from "prop-types";
import React, { useState } from 'react';

import { storage } from '../../firebase';
function ReusableForm(props) {  
 
  
  const [image, setImage ] = useState(null);
  const [url,setUrl]= useState("");
  const [progress,setProgress]=useState(0);
  const [ingredients,setIngredients]=useState(['0'])
  const [steps,setSteps]=useState(['0'])

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
         <div id="dynamicInput">
          {this.props.materials.map(x =>
            <input
              className='materials'
              type='text'
              name={'materials'+x}
              defaultValue={x}
              placeholder='' />
          )}
          <button onClick={() => this.appendIngredient()} type='button'>
            CLICK ME TO ADD MATERIALS
          </button>
        </div>
        <div id="dynamicInput2">
          {this.props.steps.map(x =>
            <input
              className='steps'
              type='text'
              name={'steps'+x}
              defaultValue={x}
              placeholder='' />

          )}
          <button onClick={() => this.appendSteps()} type='button'>
            CLICK ME TO ADD STEPS
           </button>
        </div>
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