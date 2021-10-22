import { useState } from 'react';
import './MessagesContainer.scss';
//Components
import MessageHeader from '../../pure/forms/MessagesHeader/MessageHeader'; 
import MessageTable from '../MessageTable/MessageTable';
// import TaskListComponent from '../../components/container/TaskListComponent';


export default function Messages() {
    const [messages, setMessages] = useState([]);
    
    function newMessage(mensaje) {
      debugger
      let nuevo = {
            "asunto": mensaje.asunto,
            "email": mensaje.email,
            "mensaje": mensaje.mensaje,
            "leido": false
      };
      setMessages(messages => [...messages, nuevo]);
    };

    let readMessage = (index) => {
      messages[index].leido = !messages[index].leido;
      setMessages([...messages]);
    };

    let deleteMessages = () => {
      setMessages([]);
    };
    
    let deleteMessage = (index) => {
      messages.splice(index, 1);
      setMessages([...messages]);
    };

    return (
      <div className="messages">
        <MessageHeader clickNuevo={newMessage} clickEliminar={deleteMessages} send={newMessage}>
        </MessageHeader>
        
        <MessageTable messages={messages} clickEliminarUno={deleteMessage} clickCheckRead={readMessage}>
        </MessageTable>
        {/* <TaskListComponent></TaskListComponent> */}
      </div>
    );
  }