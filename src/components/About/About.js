import React from 'react'
import './styles.css';




const About = () => {
  return (
        <div>
            <div className="c-padre-about" id="about">  
                <h1 className="c-h1-about">Sobre mí</h1>
                <p className="c-p-about">Resumen</p>
            </div>  
           
                <div className="flex-padre-about">
                <div className="flex-hijo-about">
                        <center><h4>Educación</h4></center>
                        <div class="timeline-section">
                            <div class="timeline-items">
                                <div class="timeline-item">
                                    <div class="timeline-dot"></div>
                                    <div class="timeline-date">2020 - Actualidad</div>
                                    <div class="timeline-content">
                                        <h3>Sistemas Informaticos</h3>
                                        <p>UTN</p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-dot"></div>
                                    <div class="timeline-date">2021 - 2022</div>
                                    <div class="timeline-content">
                                        <h3>Desarrollo Fullstack</h3>
                                        <p>Coderhouse</p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-dot"></div>
                                    <div class="timeline-date">2018 - 2019</div>
                                    <div class="timeline-content">
                                        <h3>Programación Java</h3>
                                        <p>UTN</p>
                                    </div>
                                </div>
                           
                           
                            
                        </div>
                    </div>


                    </div>
                    <div className="flex-hijo-about">
                        <p>Mi experiencia en la UTN me ha brindado una perspectiva integral de los sistemas informáticos, y me ha permitido desarrollar habilidades prácticas y técnicas. Me siento cómodo trabajando con diferentes lenguajes de programación, como Java y Python, y he adquirido experiencia en el diseño y desarrollo de aplicaciones.

Además, complementando mi formación académica, he participado en el programa de Desarrollador Fullstack en Coderhouse, donde he tenido la oportunidad de expandir mis habilidades en el ámbito del desarrollo web. Durante este programa, he aprendido a construir aplicaciones web dinámicas y escalables utilizando Java como lenguaje principal. Además, he adquirido conocimientos en tecnologías complementarias como HTML, CSS y bases de datos relacionales.</p>
                    </div>
                    <div className="flex-hijo-about">
                        <center><h4>Experiencia</h4></center>
                        <div class="timeline-section">
                            <div class="timeline-items">
                                <div class="timeline-item">
                                    <div class="timeline-dot"></div>
                                    <div class="timeline-date">2022 - Actualidad</div>
                                    <div class="timeline-content">
                                        <h3>SysAdmin & WebMaster</h3>
                                        <p>Garmin</p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-dot"></div>
                                    <div class="timeline-date">2019 - 2022</div>
                                    <div class="timeline-content">
                                        <h3>Soporte IT</h3>
                                        <p>DVG Servicios</p>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-dot"></div>
                                    <div class="timeline-date">2018 - 2019</div>
                                    <div class="timeline-content">
                                        <h3>Gestion RMA & IT</h3>
                                        <p>Polytech</p>
                                    </div>
                                </div>
                           
                           
                            
                        </div>
                    </div>


                    </div>

                      
            </div>
               
         </div>
       
              


  )
}

export default About
