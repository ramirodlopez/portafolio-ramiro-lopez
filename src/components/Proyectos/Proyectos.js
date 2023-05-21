import React from 'react'
import './styles.css';

import { BsGithub, BsFillRocketTakeoffFill } from "react-icons/bs";


const Proyectos = () => {
  return (
            <div>
                
                <div className="c-padre-proyectos" id="proyectos">    
                    <h1 className="c-h1-proyectos">Proyectos</h1>
                    <p className="c-p-proyectos">Recientes</p>
                </div>  
            
                <div className="p-contenedor-proyectos">
                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Proyecto Uno</h3>
                            <p class="card-text">27 de Octubre 2021</p>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Proyecto Dos</h3>
                            <p class="card-text">12 de Noviembre 2021</p>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Proyecto Tres</h3>
                            <p class="card-text">13 de Diciembre 2021</p>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>

                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Proyecto Cuatro</h3>
                            <p class="card-text">20 de Diciembre 2021</p>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Proyecto Cinco</h3>
                            <p class="card-text">27 de Diciembre 2021</p>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                    <div className="card-proyectos card border-1">
                        <div class="card-body">
                            <h3 class="card-title">Proyecto Seis</h3>
                            <p>1 de Enero 2021</p>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                </div>

            </div>



  )
}

export default Proyectos
