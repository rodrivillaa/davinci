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
   
     <div className='general'>
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
     
  )
}

export default HomePage