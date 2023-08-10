
import "./NavBar.css"
import React, {useState} from "react";
import logoda from "../img/logoda.png"
import { Link } from "react-router-dom";


    
        const NavBar = () => {
        const [isOpen, setIsOpen] = useState(false)
            return(
                <div className="navbar">
                    
          

                    <div className="img-logo">
                    <img src={logoda} alt="" />
                    </div>
                    <div className="creditos">

                    <h1>{/* CREDITOS DAVINCI */}</h1>
                    </div>


                    <div className={`nav_items ${isOpen && "open"}`}>
                    <Link to={"/"} >INICIO</Link>
                        <Link to={"/contacto"} >CONTACTO</Link>
                        <Link to={"/nosotros"} >NOSOTROS</Link>
                    </div>
                    <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )
}

export default NavBar