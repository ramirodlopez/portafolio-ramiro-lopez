import React from 'react'
import './index.css';
import Ramiro from "../../assets/ramirofoto.jpeg";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
  return (
 
        <div className="c-padre">
               
            <div className="c-hijo">
                  <h1 className="c-h1">Ramiro Lopez</h1>
                      <Typed
                          className="typed-text"
                          strings={["Software Developer"]}
                          typeSpeed={40}
                          loop
                      />
                      
                      <p className="p-perfil">Soy un desarrollador de software apasionado y altamente motivado, enfocado en crear soluciones innovadoras y de alto rendimiento. Mi objetivo es desarrollar aplicaciones robustas y escalables, utilizando tecnologías modernas y buenas prácticas de desarrollo. </p>
                  
                      
                      <button type="button" className="btn btn-dark">¡Hola! <span><FontAwesomeIcon icon={faPaperPlane} style={{color: "#ffffff",}} /></span></button>
                      <button type="button" className="btn btn-outline-dark">Curriculum <span><FontAwesomeIcon className="icono" icon={faCloudArrowDown} /></span></button>
                  
                  </div>
                  <div className="c-hijo">
                 
                       <img className="img-foto" src={Ramiro} />
                     
                  </div>
              </div>
              


  )
}

export default Header
