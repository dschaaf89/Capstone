import React, { useState } from 'react';
import { storage } from '../../firebase';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';


function AboutMeForm(props){
  const firestore = useFirestore();
  const {aboutMe} = props;
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
           
          });
      }
    )
    console.log(props)
  
    
  };
 
  useFirestoreConnect([
    { collection: 'aboutMe' }
  ]); 
   const b = useSelector(state => state.firestore.ordered.aboutMe);
  console.log(b)
  function handleEditAboutMeFormSubmission(event){
    console.log(event)
    
    event.preventDefault();
    props.onEditAboutMe();
    console.log(event.target)
    const propsToUpdate =
      {
        name:event.target.name.value,
        about:event.target.about.value,
        url:event.target.url.value
      };
      console.log(b.id)
      console.log(event.target.id.value)
    return firestore.update({collection: 'aboutMe', doc:event.target.id.value}, propsToUpdate) 
  }
  
  
  return (
    <React.Fragment>
      <div className='fileUpload'>
   <progress value={progress} max="100"/>
    <br/>

    <input type="file" onChange={handleChange}/>
    <button onClick={handleUpload}>Upload</button>
    c
  </div>
      <form onSubmit = {handleEditAboutMeFormSubmission}>
        <input
          type='text'
          name='name'
          defaultValue= {b[0].name} />
        <input
          type='text'
          name='url'
          defaultValue={url} />
        
          <textarea
          type='text'
          name='about'
          defaultValue= {b[0].about} />
          <input
          type='text'
          hidden
          name='id'
          defaultValue= {b[0].id} />

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
AboutMeForm.propTypes = {
  onAboutMeCreation: PropTypes.func
}
export default AboutMeForm;