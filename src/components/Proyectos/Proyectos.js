import React from 'react'
import './styles.css';

import { BsGithub, BsFillRocketTakeoffFill } from "react-icons/bs";


const Proyectos = () => {
    const redirigirContador = () => {
        window.location.href = 'https://github.com/ramirodlopez/contadorJS'; 
      };
      const redirigirCalculadora = () => {
        window.location.href = 'https://github.com/ramirodlopez/calculadoraJS'; 
      };
    const redirigirIP = () => {
        window.location.href = 'https://github.com/ramirodlopez/ipInfoAPI'; 
      };
      const redirigirRYM = () => {
        window.location.href = 'https://github.com/ramirodlopez/rickandmortyAPI'; 
      };
      const redirigirE1 = () => {
        window.location.href = 'https://github.com/ramirodlopez/repcomJS'; 
      };
      const redirigirE2 = () => {
        window.location.href = 'https://github.com/ramirodlopez/repcomReactJs'; 
      };
  return (
            <div>
                
                <div className="c-padre-proyectos" id="proyectos">    
                    <h1 className="c-h1-proyectos">Proyectos</h1>
                    <p className="c-p-proyectos">Recientes</p>
                </div>  
            
                <div className="p-contenedor-proyectos">
                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Contador</h3>
                            <p class="card-text">HTML | CSS | JS</p>
                            <button type="button" className="btn-p btn btn-outline-dark" onClick={redirigirContador}><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Calculadora</h3>
                            <p class="card-text">HTML | CSS | JS</p>
                            <button type="button" className="btn-p btn btn-outline-dark" onClick={redirigirCalculadora}><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">IP Información</h3>
                            <p class="card-text">HTML | CSS | JS</p>
                            <button type="button" className="btn-p btn btn-outline-dark" onClick={redirigirIP}><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>

                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Rick and Morty</h3>
                            <p class="card-text">HTML | CSS | JS</p>
                            <button type="button" className="btn-p btn btn-outline-dark" onClick={redirigirRYM}><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                    <div className="card-proyectos card border-1">
                        <div className="card-body">
                            <h3 class="card-title">Ecommerce Repcom</h3>
                            <p class="card-text">HTML | CSS | JS</p>
                            <button type="button" className="btn-p btn btn-outline-dark" onClick={redirigirE1}><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                    <div className="card-proyectos card border-1">
                        <div class="card-body">
                            <h3 class="card-title">Ecommerce Repcom</h3>
                            <p>HTML | CSS | REACTJS</p>
                            <button type="button" className="btn-p btn btn-outline-dark" onClick={redirigirE2}><span><BsGithub className="icono-proyecto" /></span>Github</button>
                            <button type="button" className="btn-p btn btn-outline-dark"><span><BsFillRocketTakeoffFill className="icono-proyecto" /></span>Deploy</button>
                        </div>
                    </div>
                </div>

            </div>



  )
}

export default Proyectos
