import React from 'react';
import { useForm } from '../../../../hooks/userForm';
import { useHistory, Link } from 'react-router-dom';

//Styles
import './LoginComponent.scss';

const LoginComponent = (props, send) => {
    // const history = useHistory();

    //Variables
    const initialForm = {
        email: '',
        password: '',
        isLogin: false
    };
    const validationsForm = (form) => {
        debugger
        let errors = {};
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        

        if(!form.email.trim()) {
            errors.email = 'El asunto es obligatorio';
        }
        else if (!regexEmail.test(form.email.trim())) {
            errors.email = 'El asunto solo admite letras y espacios en blanco';
        }
        if(!form.password.trim()) {
            errors.password = 'La password es obligatoria';
        }
        else if (form.password.length < 5) {
            debugger
            errors.password = 'La password minimo tiene que contener 5 characteres';
        }
        return errors;
    };

    // const redirectToTask = () => {
    //     debugger
    //     history.push({
    //         pathname: '/task',
    //     })
    // }


    const {
        form,
        errors,
        handleSubmit,
        handleChange,
        handleBlur,
      } = useForm(initialForm, validationsForm, props);

        return (
            <div className="messageHeader">
               <form className="form" onSubmit={handleSubmit}>
                   <div >
                        {errors.email ? <span className="error">Email</span >: <label>Email</label>}
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
                            {errors.email && <span className="msg">{errors.email}</span >}
                    </div>
                    <div>
                        {errors.password ? <span className="error">Password</span >: <label>Password</label>}
                        <input 
                            className={errors.password ? 'error-input' : 'input'} 
                            placeholder="Escribe su password"
                            type="password" 
                            name="password" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={form.password} 
                            required
                            minLength="4"
                            />
                            {errors.password && <span className="msg">{errors.password}</span >}
                   </div>
                   <Link className="resgiter-link" to='/register'>   
                    Registrate si no lo has hecho aun!
                    </Link>
                   <button 
                        type="submit" 
                        className='new'
                        >
                            Login
                    </button>
               </form>
            </div>
        );
}

export default LoginComponent;