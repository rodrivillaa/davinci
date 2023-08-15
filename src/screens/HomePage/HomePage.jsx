import React from 'react'
import "./HomePage.css"
import davinci3 from "../img/davinci3.png"
import { useCustomContext } from '../../ContextManager/ContextProvider'
import {ProductCard,Footer}  from '../../Components'
import NavBar from '../NavBar/NavBar'
import { Carrusel } from '../../Components'
import listo5 from "../img/listo5.png"

const HomePage = () => {
  const {products} = useCustomContext()
  return (
    <>
   
     <div>
        <header>
            
            
            
            <div className='header'>
            {/*   <img src={listo5} alt="" /> */}
            </div>
          
            
            </header> 
            
            
            </div>
            <div className='carru'>
              <Carrusel/>
              </div>
    <div   className='container-general'>
      

      {products.map(producto => (
        <ProductCard producto={producto} key={producto.id}/>
        ))}
      
  </div> 

  <Footer/>
            </>
        /*  
          
    <div className='container-general'>
        
        
        <div className='img-1'>
        <h1>GENDARMERIA NACIONAL</h1>


        <img src="https://www.argentina.gob.ar/sites/default/files/himno_nacional_argentino.jpg" alt="" />
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae error accusamus impedit sequi! Exercitationem quod recusandae eos natus dolore vero asperiores, magnam laborum obcaecati quam mollitia suscipit quis alias totam.</p>
        <button>Pedi tu Prestamo</button>
        </div>
        
        
        <div className='img2'>
            <h1>
                FUERZA AEREA
            </h1>
            <img src="https://www.defensa.com/foto-articulo-fichero_32635_20230103.jpg,800,700,0.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil suscipit repudiandae dolores inventore explicabo similique doloribus enim iure quibusdam quisquam illum, corrupti modi, aliquam voluptate libero rerum? Error, quisquam fugiat.</p>
            <button>Pedi tu Prestamo</button>
        </div>

        
        <div className='img3'>
          <h1>POLICIA FEDERAL</h1>
            <img src="https://i2.wp.com/multimediodigital.com/wp-content/uploads/2022/12/pfa.jpg?fit=930%2C580&ssl=1" alt="" />
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ex incidunt aut reiciendis itaque explicabo quibusdam magnam harum! Laborum hic aperiam sequi laudantium dicta velit beatae rerum. Suscipit, labore totam.</p>
            <button>Pedi tu Prestamo</button>
       </div>


       <div className='img4'>
          <h1>AFIP/ADUANA</h1>
            <img src="https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2021/05/516246.jpg" alt="" />
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ex incidunt aut reiciendis itaque explicabo quibusdam magnam harum! Laborum hic aperiam sequi laudantium dicta velit beatae rerum. Suscipit, labore totam.</p>
            <button>Pedi tu Prestamo</button>
       </div>



       <div className='img5'>
          <h1>EJERCITO ARGENTINO</h1>
            <img src="https://fotos.perfil.com/2023/04/21/trim/1280/720/ejercito-argentino-1552057.jpg" alt="" />
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ex incidunt aut reiciendis itaque explicabo quibusdam magnam harum! Laborum hic aperiam sequi laudantium dicta velit beatae rerum. Suscipit, labore totam.</p>
            <button>Pedi tu Prestamo</button>
       </div>





       <div className='img6'>
          <h1>EANA</h1>
            <img src="https://www.eana.com.ar/sites/default/files/2022-08/EANA-quienes-somos-y-que-hacemos.jpg" alt="" />
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ex incidunt aut reiciendis itaque explicabo quibusdam magnam harum! Laborum hic aperiam sequi laudantium dicta velit beatae rerum. Suscipit, labore totam.</p>
            <button>Pedi tu Prestamo</button>
       </div>








    </div> */ 
  )
}

export default HomePage