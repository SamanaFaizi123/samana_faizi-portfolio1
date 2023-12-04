import { useRef } from 'react';
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


const FormStyles = styled.form`
width: 100%;
.form-group{
    width: 100%;
    margin-bottom: 2rem;

}label{
    font-size: 1.8rem;  
}input, textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;

}textarea{
    min-width: 250px;
    resize: vertical;
}
button[type="submit"] {
    color:rgb(137, 109, 36) ;
    background: 0 0;
    letter-spacing: 3px;
    text-decoration: none;
    border: 1px solid rgb(137, 109, 36);
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    padding: 1rem 4rem;
    border-radius: 10px;
    cursor: pointer;
    float:right;
    animation:fadeIn 1s 1.8s backwards;
    withe-space:nowrap

}button[type="submit"]:hover{
    background-color:rgb(137, 109, 36);
    color:#fff;
}

`
export default function ContactForm() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [showAlert,setShowAlert] = useState(true);
    const [alertMessage, setAlertMessage] = useState('');
    const [isFromValid,setIsFormValid] = useState(true);

   const form = useRef();
   const handleSubmit = (e) => {
    e.preventDefault();
    if(!name  || !email || !message){
        setAlertMessage(alert('Please fill in all the fields'));
        setShowAlert(true);
        setIsFormValid(false);
        return;
    }
    setIsFormValid(true)
    setName('');
    setEmail('');
    setMessage('');
    emailjs.sendForm('service_dzutv4r', 'template_pxxumyy', form.current,{
        your_name:name,
        your_email:email,
        your_message:message,
    } ,'OoiRlRroyqMWMmdCHWwH8')
      .then(() => {
          form.current.reset();
          setAlertMessage( 'Email Sent Successfully!');
          setShowAlert(true);
          setIsFormValid(true);
          setName('');
          setEmail('');
          setMessage(''); 
      } ).catch(() =>{
        setAlertMessage('Failed to send')
        setShowAlert(true)
      })
  };
  
  return (
    <div>
        <FormStyles ref={form} onSubmit={handleSubmit}>
            <div className='form-group' >
                <label htmlFor='name'>Your name
                < input type='text' id='name' name='your_name'
                value={name} onChange={event=> setName(event.target.value)}
                onBlur={() =>setIsFormValid(Boolean(name))} 
                className={!isFromValid && !name ? 'invalid' : '' }/>
                </label>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Your email
                < input type='text' id='email' email='email'name='your_email'
                value={email} onChange={event=> setEmail(event.target.value)}
                 className={!isFromValid && !email ? 'invalid' : ''}/>
                </label>
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Your message
                < textarea type='text' id='email' message='message' name='your_message'
                value={message} onChange={event=> setMessage(event.target.value)}
                className={!isFromValid && !message ? 'invalid' :''}/>
                </label> </div>
            <button type='submit'>SEND</button>
        </FormStyles>
        {showAlert && alertMessage !== 'please fill in all the fields' &&
         alertMessage !== 'Email sent successfully'}   
    </div>
  )
}
