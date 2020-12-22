import React, {useState} from 'react';
import "./ContactForm.css"
import { useFirestore } from 'react-redux-firebase'



const AboutMeForm = () => {
  const firestore = useFirestore();
  const [name,setName]=useState('');
  const [url,setUrl]=useState('')
  const [about,setAbout]=useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    firestore.collection('about').add({
      name:name,
      url:url,
      about:about
    })

      setEmail('');
      setName('');
      setMessage('');
      
  };
  return(
    <div className="card3">
      
    <form className='form' onSubmit={handleSubmit}>
    <div className="row">
        <div className="col">
      <h1>aboutMe</h1>
      <div className="col">
      <label>Name</label>
      <input placeholder="Name" value = {name}
      onChange={(e)=> setName(e.target.value)}
      />
      </div>
      <div className="col">
      <label>Photo</label>
      <input placeholder="url" value = {url}
      onChange={(e)=> setUrl(e.target.value)}
      />
      </div>
      <div className="col">
      <label>About</label>
      <textarea placeholder="About"
      value = {about}
      onChange={(e)=> setAbout(e.target.value)}/>
      </div>
      
    <button type='submit'>submit</button>
    </div>
    </div>
    </form>
    </div>
  )
  
}


export default AboutMeForm;
