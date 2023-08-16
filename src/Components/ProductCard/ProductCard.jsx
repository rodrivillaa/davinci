import React from 'react'
import { Link } from 'react-router-dom'
import "../ProductCard/ProductCard.css"

const ProductCard = ({producto}) => {
  return (
    <div className='img-1'>
      <h2>{producto.nombre}</h2>
      <img src={producto.img}/><br />
     <Link className="btn-boton"to={"/detail/" + producto.id}> Pedi tu prestamo</Link>
    </div>
  )
}

export default ProductCard