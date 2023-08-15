import { DetailPaige, HomePage, NavBar,Nosotros} from './screens'
import { Footer,Formulario, ProductCard } from './Components'
import './App.css'
 import {useCustomContext} from "./ContextManager/ContextProvider" 
import { Route,Routes } from 'react-router-dom'
 

function App() {
  const {products}=useCustomContext() 


  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/'element={<HomePage/>}/>
      <Route path='detail/:id' element={<DetailPaige/>}/>
      <Route path='/contacto' element={<Formulario/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>

    </Routes>
    <Footer/>
   {/*  <Footer/> */}
  
  
    </>
    )
    }

export default App
