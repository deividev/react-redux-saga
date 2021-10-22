import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
	
import { createStore } from 'redux';
 
 	
const contador = (state = 0, action) => {
  switch(action.type) {
    case 'SUMA': return state + 1;
    case 'RESTA': return state - 1;
    default: return state;
  }
}
/** REDUX STATE */
// STORE - El estado global de la aplicación.


let store = createStore(
  contador,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log('🗨 El nuevo estado de nuestra aplicación es... ');
  console.log(store.getState());
});
// ACTIONS - Las instrucciones para modificar el estado.
const suma = () => {
  return {
    type: 'SUMA'
  }
}

const resta = () => {
  return {
    type: 'RESTA'
  }
}


// Ejecutamos el método reducer a partir de las actions
setTimeout(() => {
  store.dispatch(suma()); //  Igual que: store.dispatch({type: 'SUMA'});
}, 1000);

setTimeout(() => {
  store.dispatch(resta()); //  Igual que: store.dispatch({type: 'RESTA'});
}, 2000);
	


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
