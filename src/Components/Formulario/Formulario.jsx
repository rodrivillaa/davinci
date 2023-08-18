import React ,{useState}from 'react'
import emailjs from '@emailjs/browser';
import "./Formulario.css"
import { useRef } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider';

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
 const SendEmaili = () =>{
    Swal.fire(
        'Bien Hecho',
        'Tu solicitud fue enviada con exito',
        'success'
    )
} 
        
    
  
    return (
         <div className='contenedor-principal'>
            
      <form className='contenedor-formulario' ref={form} onSubmit={sendEmail}>
            <h5>Envianos tu solicitud!<hr></hr></h5>
          
          

            <label htmlFor="fullname">Nombre completo</label>
            <input className='input-text'type='text' name='user_name' id='fullname' />


            <label htmlFor="email">Email</label>
            <input className='input-text' type="email" name='user_email'id='email' />

            <label htmlFor="telefono">Telefono</label>
            <input className='input-text' type="tel" name='telefono' id='telefono'  />

            <label htmlFor="message">Mensaje</label>
            <textarea className='text-textarea' name='mensaje' id='mensaje' ></textarea>

             <div className='contenedor-boton'>
                <button onClick={SendEmaili}  className='boton' type='submit'>Enviar</button>
            </div> 
           
    
    
</form>
</div>
            

    )}


export default Formulario