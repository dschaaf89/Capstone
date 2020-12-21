import React, {useState} from 'react';

import { useFirestore } from 'react-redux-firebase'



const ContactForm = () => {
  const firestore = useFirestore();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    firestore.collection('ContactMeForm').add({
      name:name,
      email:email,
      message:message
    })
    .then(()=>{
      alert('Message has been submitted')
    })
      .catch(error =>{
        alert(error.message);
      });
  };
  return(
    <form className='form' onSubmit={handleSubmit}>
      <h1>Contact Me</h1>
      <label>Name</label>
      <input placeholder="Name" value = {name}
      onChange={(e)=> setName(e.target.value)}
      />
      <label>Email</label>
      <input placeholder="Email" value = {email}
      onChange={(e)=> setEmail(e.target.value)}
      />
      <label>Message</label>
      <textarea placeholder="Message"
      value = {message}
      onChange={(e)=> setMessage(e.target.value)}/>
      
    <button type='submit'>submit</button>
    </form>
  )
}

export default ContactForm;
