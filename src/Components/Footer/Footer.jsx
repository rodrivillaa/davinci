import React from 'react'
import './Footer.css'
import { BsWhatsapp, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { BiCaretRight } from "react-icons/bi";
import logodaa from "../img/logodaa.png"



const Footer = () => {



return (

    <div className='Footer-Container'>

        <div className='Contenedor1'>
            <h1>SEGUINOS</h1>
            <div className='ContenedorHijo1'>
             
                <a href="">
                    <BsWhatsapp/> 113681-2916

                </a>

                <a href="https://www.instagram.com/davinci.creditos/">
                    <BsInstagram/> davinci.creditos 

                </a>
                <a href="">
                
                    <BsFacebook/> Creditos Davinci
                </a> 
            </div>
        </div>
        <div className='contenedor2'>

            <div className='logo'>
                <img src={logodaa} alt="" />

            </div>



        </div>

        <div className='contenedor3'>
            <h1>NUESTROS PRESTAMOS</h1>
       <div className='lista'>

           <span> <BiCaretRight/>Creditos  fuerza aerea</span> 
           <span> <BiCaretRight/>Creditos  policia federal</span> 
           <span> <BiCaretRight/>Creditos  Ejercito Argentino</span> 
           <span> <BiCaretRight/>Creditos AENA</span> 
           <span> <BiCaretRight/>Creditos Aduana Argentina</span> 



       </div>
        
        </div>
    </div>
    

)
}

export default Footer