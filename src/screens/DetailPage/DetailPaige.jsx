import React from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Footer } from '../../Components'

const DetailPaige = () => {
    const {id}=useParams()
    const {getProductById} = useCustomContext()
    const ProductDetail=getProductById(id)
  return (
    <>
    
    
    <div>
        <h1>{ProductDetail.nombre}</h1>
        <h2>sadasdasdas</h2>
    </div>
    
    
    
    </>
  )
}

export default DetailPaige