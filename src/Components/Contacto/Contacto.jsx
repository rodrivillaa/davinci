
import './Contacto.css'
import React from 'react'
import { BsWhatsapp , BsInstagram} from "react-icons/bs";
import { BiLogoGmail} from "react-icons/bi";
import Footer from '../Footer/Footer';
import contacto4 from "../img/contacto4.png"

const Formulario = () => {
  return (
    <>
    <header className='contacto'>
        <img src={contacto4} alt="" />
    </header>
    <div className='contenedorprincipal'>
        
        <a href="https://w.app/1RzyEs">
                  
        <div className='contenedor1'>
        
        <div className='wsp'>

        <BsWhatsapp/>
        </div>
           <h2>Whatsapp</h2>
           <h3>11 3801-2916</h3>
           <h4>Contactate con nosostros</h4>
        </div>
                </a>
        
        <a href="https://www.instagram.com/davinci.creditos/">
<div className='contenedor6'>

        <div className='instagram'>
                    <BsInstagram/> 
        </div>
        <h2>Instagram</h2>
            <h3>davinci.creditos</h3>
            <h4>Visita nuestro perfil </h4>
</div> 
                </a>



        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDshHhNrBVWkSsBfxhqTBmSfwLttdhTvdfQqZKXsMrQDNlZRQmjCxGTwPWkvBMwsWVkSfk">
        <div className='contenedor7'>

              
        <div className='gmail'>
        <BiLogoGmail/>
        </div>
        <h2>Gmail</h2>
        <h3>justinianotejera@gmail.com</h3>
        <h4>Envianos tu consulta</h4>
        

        </div>
                 </a> 
        






    </div>
    
    
    
    <Footer/>
    
    </>
  )
}



export default Formulario