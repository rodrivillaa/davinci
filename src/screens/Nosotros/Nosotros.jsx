import React from 'react'
import { Formulario } from '../../Components'
import "./Nosotros.css"
import noso1 from "../img/noso1.png"
import rapido from "../img/rapido.png"
import cohete from "../img/cohete.jpg"
import confianza from "../img/confianza.png"
import {Footer} from '../../Components'

const Nosotros = () => {
  return (
      <>
      
        <div className='nosotros'>
         <img src={noso1} alt="" /> 
          
         </div>
      <div className='containergeneral'>

        <div className='iconos'>

       
        <div className='container-1'>
          <img src={rapido} alt="" />
          <h3>Simples y rápidos</h3>
          

        </div>

        <div className='container-2'>
<img src={cohete} alt="" />
<h3>Acreditación inmediata</h3>
        </div>

        <div className='container-3'>
          <img src={confianza} alt="" />
          <h3>18 años de experiencia</h3>

        </div>
        </div>

        
      <div className='info'>

        <h2>Nos especializamos en asistencia financiera a miembros de las Fuerzas Armadas y Seguridad,Empleados PÚBLICOS NACIONALES Y PROVINCIALES.
Otorgamos
Préstamos Decreto 14/12( Descuento de Haberes) o CBU (movimientos bancarios ).
Nos avalan 18 Años de trayectoria
Paralelamente nos esforzamos día a día en mejorar los  servicios otorgados a nuestros socios buscando ampliar continuamente nuestro Catálogo y su cobertura geográfica.  Nuestros productos están especialmente diseñados para el momento requerido por el mercado y tipo de asociados.</h2>
        </div> 
      </div>
      <Footer/>
      </>
      
  )
}

export default Nosotros