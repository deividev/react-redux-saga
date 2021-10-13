import { useState } from 'react';
import './Messages.view.css';
//Components
import MessageHeader from '../../components/MessagesHeader/MessageHeader'; 
import MessageTable from '../../components/MessageTable/MessageTable';


export default function Messages() {
    const [messages, setMessages] = useState([]);
    
    let newMessage = () => {
      let nuevo = {
            "asunto": "Prueba",
            "email": "email@email.com",
            "mensaje": `Este es un mensaje de pruebas... ${Math.random()}`,
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
      <div class="messages">
        <MessageHeader clickNuevo={newMessage} clickEliminar={deleteMessages}>
        </MessageHeader>
        
        <MessageTable messages={messages} clickEliminarUno={deleteMessage} clickCheckRead={readMessage}>
        </MessageTable>
      </div>
    );
  }