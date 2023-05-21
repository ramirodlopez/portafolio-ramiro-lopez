import React from 'react'
import './styles.css';
//import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-scroll";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white w-100">
          
                    <a className="navbar-brand" href="#"><span><FontAwesomeIcon icon={faCode} bounce /></span> RL</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                    </button>

       
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link to="header" spy={true} smooth={true} offset={100} duration={500} className="nav-link" href="#">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="about" spy={true} smooth={true} offset={100} duration={500} className="nav-link" href="#">Sobre mí</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="proyectos" spy={true} smooth={true} offset={100} duration={500} className="nav-link" href="#">Proyectos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="skills" spy={true} smooth={true} offset={100} duration={500} className="nav-link" href="#">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contacto" spy={true} smooth={true} offset={100} duration={500} className="nav-link" href="#">Contacto</Link>
                    </li>
                    </ul>
                
                </div>
          
            
    </nav>
        
  )
}

export default Navbar
