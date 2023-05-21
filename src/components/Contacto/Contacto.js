import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const Contacto = () => {
  return (
    <div className="c-principal-contacto">
                <div className="c-padre-contacto" id="contacto">  
                    <h1 className="c-h1-contacto">Contacto</h1>
                    <p className="c-p-contacto">Escribime</p>
                </div>  
              
        <div className="c-contacto card">
        <form>
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Ingrese su email"  />
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje:</label>
            <textarea class="form-control" id="mensaje" rows="5" placeholder="Ingrese su mensaje"></textarea>
          </div>
          <button type="submit" class="btn btn-outline-dark">Enviar<span><FontAwesomeIcon className="icono-contacto" icon={faPaperPlane} /></span></button>
        </form>
      </div>
  </div>
  )
}

export default Contacto
