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
                <span> <BsWhatsapp/> 113681-2916</span>
                <span> <BsInstagram/> davinci.creditos </span>
                <span> <BsFacebook/> Creditos Davinci</span>
               
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

           <span> <BiCaretRight/>creditas para fuerza aerea</span> 
           <span> <BiCaretRight/>creditas para fuerza aerea</span> 
           <span> <BiCaretRight/>creditas para fuerza aerea</span> 
           <span> <BiCaretRight/>creditas policia federal</span> 
           <span> <BiCaretRight/>creditas gendarmeria</span> 



       </div>
        
        </div>
    </div>
    

)
}

export default Footer