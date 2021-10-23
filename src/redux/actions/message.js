import { ACTIONS_MENSAJES } from "../../models/enums/actionsMessage.enum"

export const borrarMensaje = (index) => {
    return {
      type: ACTIONS_MENSAJES.BORRAR,
      payload: index
    }
  }
  
  export const vaciarMensajes = () => {
    return {
      type: ACTIONS_MENSAJES.VACIAR
    }
  }

  export const crearMensaje = (msg) => {
    return {
      type: ACTIONS_MENSAJES.CREAR,
      payload: msg
    }
  }
  
  export const leerMensaje = (index) => {
    return {
      type: ACTIONS_MENSAJES.LEER,
      payload: index
    }
  }