
import { useForm } from '../../hooks/userForm';
import './MessageHeader.scss';
//Components



//Variables
const initialForm = {
  asunto: '',
  email: '',
  mensaje: '',
};
const validationsForm = (form) => {
  let errors = {};
  const regexAsunto = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexMensaje = /^.{10,125}$/;

  if(!form.asunto.trim()) {
    errors.asunto = 'El asunto es obligatorio';
  }
  else if (!regexAsunto.test(form.asunto.trim())) {
    errors.asunto = 'El asunto solo admite letras y espacios en blanco';
  }


  if(!form.email.trim()) {
    errors.email = 'El email es obligatorio';
  }
  else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'El email debe tener formato valido';
  }

  if(!form.mensaje.trim()) {
    errors.mensaje = 'El mensaje es obligatorio';
  }
  else if (!regexMensaje.test(form.mensaje.trim())) {
    errors.mensaje = 'El mensaje debe tener minimo 10 characteres y maximo 125';
  }

  return errors;
};



export default function MessageHeader(props, send) {

  const {
    form,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useForm(initialForm, validationsForm, props);
      
  return (
    <div className="messageHeader">
        <form onSubmit={handleSubmit} className="form">
            <strong>Mi formulario</strong>
            
            <input 
              className={errors.asunto ? 'error-input' : 'input'} 
              placeholder="Escribe un asunto"
              type="text" 
              name="asunto" 
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.asunto} 
              required
            />
            {errors.asunto && <span className="error">{errors.asunto}</span >}
            <input 
              className={errors.email ? 'error-input' : 'input'} 
              placeholder="Escribe su email"
              type="email" 
              name="email" 
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.email} 
              required
            />
            {errors.email && <span className="error">{errors.email}</span >}
            <textarea 
              className={errors.mensaje ? 'error-input' : 'input'}  
              placeholder="Escriba un mensaje"
              type="text" 
              name="mensaje"
              cols="25"
              rows="3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={form.mensaje} 
              required
            />
            {errors.mensaje && <span className="error">{errors.mensaje}</span >}
          <div className="flex">
            <button 
              type="submit" 
              className='new'
              >Nuevo</button>
            <button onClick={props.clickEliminar} className="clean">Vaciar</button> 
          </div>
          
        </form>
    </div> 
  );
}