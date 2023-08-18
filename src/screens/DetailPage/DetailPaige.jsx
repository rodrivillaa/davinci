import React from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Footer, Formulario, Carrusel2} from '../../Components'
import "./DetailPage.css"
import { FcCheckmark } from "react-icons/fc";

const DetailPaige = () => {
    const {id}=useParams()
    const {getProductById} = useCustomContext()
    const ProductDetail=getProductById(id)
  return (
    <>
    
    <div className='requicontenedor'>
     
        <Carrusel2/>
      
   
   
      <div className='requisitos'>
   
        <div className='requi1'>
        <h2>Requisitos</h2>
        <hr />
            <h3> <FcCheckmark/> DNI</h3>
            <h3> <FcCheckmark/> Mayor de 18 años.</h3>
            <h3> <FcCheckmark/> Ultimo recibo de haberes</h3>
            <h3> <FcCheckmark/> Ser argentino o con residencia permanente en el pais</h3>
            <br />

            
            <h2>Organismos habilitados</h2>
            <hr />
            <h3><FcCheckmark/>Aduana Argentina</h3>
            <h3><FcCheckmark/>Ministerio de Justicia/Trabajo</h3>
            <h3><FcCheckmark/>Organismos Publicos</h3>
            <h3><FcCheckmark/> fuerza aerea</h3>
            <h3><FcCheckmark/>Prefectura</h3>
            <h3><FcCheckmark/>policia federal</h3>
            <h3><FcCheckmark/>Vialidad Nacional</h3>
            <h3><FcCheckmark/>Ejercito Argentino</h3>
            <h3><FcCheckmark/> Gendarmeria Nacional</h3>
            <h3><FcCheckmark/>EANA</h3>
            



           
            </div>
              {/* <img src={REGISTRO} alt="" />
             */}
     <div className='formu'>
      <Formulario/>
     </div>

      </div>
      





    </div>
    <Footer/>
    </>
  )
}

export default DetailPaige