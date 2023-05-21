import React from 'react'
import './styles.css';

import { BsGithub } from "react-icons/bs";

import { SiCplusplus, SiCodio, SiPython, SiCss3, SiHtml5, SiJavascript, SiMongodb, SiBootstrap } from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { IoIosInfinite } from 'react-icons/io';



const Skills = () => {
  return (
            <div>
                
                <div className="c-padre-skills" id="skills">    
                    <h1 className="c-h1-skills">Skills</h1>
                    <p className="c-p-skills">Habilidades</p>
                </div>  
            
                <div className="p-contenedor-skills">
                        <div className="card-skills card">
                            <div class="card-body">
                                <SiCodio className="icono-skills" />
                                <h3 className="h3-skills">C</h3>
                            </div> 
                        </div>
                        <div className="card-skills card">
                            <div class="card-body">
                                <SiCplusplus className="icono-skills" />
                                <h3 className="h3-skills">C++</h3>
                            </div>
                        </div>
                        <div className="card-skills card">
                            <div class="card-body">
                                <FaJava className="icono-skills" />
                                <h3 className="h3-skills">Java</h3>
                            </div>
                        </div>
                        <div className="card-skills card">
                            <div class="card-body">
                                <SiPython className="icono-skills" />
                                <h3 className="h3-skills">Python</h3>
                            </div>
                        </div>
                
               
                        <div className="card-skills card">
                            <div class="card-body">
                                <SiCss3 className="icono-skills" />
                                <h3 className="h3-skills">CSS</h3>
                            </div>
                        </div>
                        <div className="card-skills card">
                            <div class="card-body">
                                <SiHtml5 className="icono-skills" />
                                <h3 className="h3-skills">HTML</h3>
                            </div>
                        </div>
                        <div className="card-skills card">
                             <div class="card-body">
                                <RiReactjsLine className="icono-skills" />
                                <h3 className="h3-skills">ReactJS</h3>
                            </div>
                        </div>
                        <div className="card-skills card">
                            <div class="card-body">
                                <SiJavascript className="icono-skills" />
                                <h3 className="h3-skills">JavaScript</h3>
                            </div>
                        </div>
               
                        <div className="card-skills card">
                            <div class="card-body">
                                <FaNodeJs className="icono-skills" />
                                <h3 className="h3-skills">Node.js</h3>
                            </div>
                        </div>
                        <div className="card-skills card">
                            <div class="card-body">
                                <SiMongodb className="icono-skills" />
                                <h3 className="h3-skills">MongoDB</h3>
                            </div>
                        </div>
                        <div className="card-skills card">
                            <div class="card-body">
                                <SiBootstrap className="icono-skills" />
                                <h3 className="h3-skills">Bootstrap</h3>
                            </div>
                        </div>
                        <div className="card-skills card">
                            <div class="card-body">
                                <IoIosInfinite className="icono-skills" />
                                <h3 className="h3-skills">CI/CD</h3>
                            </div>
                        </div>
             
                        <div className="card-skills card">
                            <div class="card-body">
                                <BsGithub className="icono-skills" />
                                <h3 className="h3-skills">Git/GitHub</h3>
                        </div>
                       </div>
                </div>
            </div>



  )
}

export default Skills
