import React from 'react'
import './styles.css'
import Ramiro from "../../assets/ramirofoto.jpeg";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faCloudArrowDown} from "@fortawesome/free-solid-svg-icons";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";





const Header = () => {
  
  return (
 
        <div className="c-padre-header" id="header">
             <div>
                    <div className="flex-container-redes-header">     
                    
                        <a href="https://github.com/ramirodlopez" target="_blank" className="red">
                                <BsGithub style={{ color:"rgb(41, 41, 41)", fontSize: '30px' }} />
                        </a>
                       
                        <a href="https://www.linkedin.com/in/ramiro-diego-lopez/" target="_blank" className="red">
                                <BsLinkedin style={{ color:"rgb(41, 41, 41)", fontSize: '30px' }} />
                        </a>
                           
                    </div>
            </div>
               
            <div className="c-hijo-header">
                  <h1 className="c-h1-header">Ramiro Lopez</h1>
                      <Typed
                          strings={["Software Developer"]}
                          typeSpeed={40}
                          className="typedtext"
                          loop
                      /> 

                      
                      <p className="p-perfil-header">Soy un desarrollador de software apasionado y altamente motivado, enfocado en crear soluciones innovadoras y de alto rendimiento.</p>
                  
             
                      <a href="https://api.whatsapp.com/send/?phone=5491136727054&text&type=phone_number&app_absent=0" target="_blank"><button type="button" className="btn btn-dark">¡Hola! <span><BsWhatsapp style={{color: "#ffffff",}} /></span></button></a>
                      <a href="https://drive.google.com/file/d/1qELjNXNu_BoKV6H1Jz3cK4-UbQ-9Xs04/view?usp=sharing" target="_blank"><button type="button" className="btn btn-outline-dark">Curriculum <span><FontAwesomeIcon className="icono" icon={faCloudArrowDown} /></span></button></a>
    
                      
                      
            </div>
            <div className="c-hijo-header">
                    <img className="img-foto-header" src={Ramiro} />

            </div>
        </div>
            


  )
}

export default Header
