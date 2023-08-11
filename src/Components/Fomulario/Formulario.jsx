import React, { useRef } from 'react'
import './Formulario.css'
import emailjs from '@emailjs/browser';

export const Formulario = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gpitf2o', 'template_p4fdnrh', form.current, 'BD2lCMD0aWqIx2oPG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
         <div className='contenedor-principal'>
      <form className='contenedor-formulario' ref={form} onSubmit={sendEmail}>
            <h5>CONTACT</h5>

            <label htmlFor="fullname">Full Name</label>
            <input className='input-text'type='text' name='user_name' id='fullname' />


            <label htmlFor="email">Email</label>
            <input className='input-text' type="email" name='user_email'id='email' />

            <label htmlFor="asunto">Asunto</label>
            <input className='input-text' type="text" name='asunto' id='asunto'  />

            <label htmlFor="message">Message</label>
            <textarea className='text-textarea' name='mensaje' id='mensaje' ></textarea>

             <div className='contenedor-boton'>
                <button className='boton' type='submit'>Send</button>
            </div> 
           
	
    
</form>
</div>
            

    )}


export default Formulario