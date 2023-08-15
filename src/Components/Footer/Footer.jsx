import React from 'react'
import './Footer.css'
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { BiCaretRight } from "react-icons/bi";
import logodaa from "../img/logodaa.png"
import { Link } from 'react-router-dom'
import { BiLogoGmail } from "react-icons/bi";



const Footer = ({producto}) => {



return (

    <div className='Footer-Container'>

        <div className='Contenedor1'>
            <h1>SEGUINOS</h1>
            <div className='ContenedorHijo1'>
             
                <a href="https://w.app/1RzyEs">
                    <BsWhatsapp/> 11 3801-2916

                </a>

                <a href="https://www.instagram.com/davinci.creditos/">
                    <BsInstagram/> davinci.creditos 

                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDshHhNrBVWkSsBfxhqTBmSfwLttdhTvdfQqZKXsMrQDNlZRQmjCxGTwPWkvBMwsWVkSfk">
                
               < BiLogoGmail/> justinianotejera@gmail.com
                </a> 
            </div>
        </div>
        <div className='contenedor2'>

            <div className='logo'>
                <img src={logodaa} alt="" />

            </div>



        </div>
<div className='prestamo'>

            <h1>NUESTROS PRESTAMOS</h1>
        <div className='contenedor3'>
       <div className='lista'>

        <Link to={"/detail/1"}>
        
           <BiCaretRight/>Creditos  fuerza aerea
        </Link>   
           
         
        
           
           
        <Link to={"/detail/3"}>
        
            <BiCaretRight/>Creditos  policia federal
        </Link>
            
           

         <Link to={"/detail/1"}>
         
            <BiCaretRight/>Creditos  Ejercito Argentino
         </Link>
            
           

         <Link to={"/detail/1"}>
            <BiCaretRight/>Creditos EANA
         
         </Link>
            
           

           <Link to={"/detail/3"}>
           
            <BiCaretRight/>Creditos Gendarmeria Nacional
           </Link>
            




       </div>
          <div className='lista2'>

            <Link to={"/detail/1"}>

                 <BiCaretRight/>Creditos Aduana Argentina
            </Link>
         
          <Link to={"/detail/3"}>

                 <BiCaretRight/>Creditos Prefectura
            </Link>
            

            <Link to={"/detail/3"}>

<BiCaretRight/>Creditos Ministerio de Justicia/Trabajo
</Link>

<Link to={"/detail/3"}>

<BiCaretRight/>Creditos Organismos Publicos
</Link>
<Link to={"/detail/3"}>

<BiCaretRight/>Creditos Vialidad Nacional
</Link>
          </div>
        
        </div>
    </div>
    
</div>

)
}

export default Footer