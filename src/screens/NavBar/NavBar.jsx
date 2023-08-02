
import "./NavBar.css"
import React, {useState} from "react";
import logoda from "../img/logoda.png"


    
        const NavBar = () => {
        const [isOpen, setIsOpen] = useState(false)
            return(
                <div className="navbar">
                    
          

                    <div className="img-logo">
                    <img src={logoda} alt="" />
                    </div>
                    <div className="creditos">

                    <h1>CREDITOS DAVINCI</h1>
                    </div>


                    <div className={`nav_items ${isOpen && "open"}`}>
                        <a href="#"> INICIO</a>
                        <a href="#"> BIO</a>
                        <a href="#"> PORTAFOLIO</a>
                        <a href="#"> CONTACTO</a>
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