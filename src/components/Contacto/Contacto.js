import React, { useRef } from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = () => {
   const Swal = require('sweetalert2');
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_r0ycpuj", "template_oy3vtw8", form.current, "user_lhx5TAh3LG1Z01CBeFXJH")
          .then((result) => {
              console.log(result.text);
              form.current.reset();
              Swal.fire({
                title: '¡Email enviado!',
                text: 'Gracias por contactarse.',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
          }, (error) => {
              console.log(error.text);
              Swal.fire({
                title: '¡Error!',
                text: 'No se pudo enviar.',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
          });
      };

  return (
    <div className="c-principal-contacto">
                <div className="c-padre-contacto" id="contacto">  
                    <h1 className="c-h1-contacto">Contacto</h1>
                    <p className="c-p-contacto">Escribime</p>
                </div>  
              
        <div className="c-contacto card">
        <form ref={form} onSubmit={sendEmail}>
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input name="user_name" type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input name="user_email" type="email" class="form-control" id="email" placeholder="Ingrese su email"  />
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje:</label>
            <textarea name="message" class="form-control" id="mensaje" rows="5" placeholder="Ingrese su mensaje"></textarea>
          </div>
          <button type="submit" class="btn btn-outline-dark">Enviar<span><FontAwesomeIcon className="icono-contacto" icon={faPaperPlane} /></span></button>
        </form>
      </div>
  </div>
  )
}

export default Contacto
