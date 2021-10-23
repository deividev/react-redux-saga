import { useSelector, useDispatch } from 'react-redux';
import './MessagesContainer.scss';
//Components
import MessageHeader from '../../pure/forms/MessagesHeader/MessageHeader'; 
import MessageTable from '../MessageTable/MessageTable';
import {
  borrarMensaje, crearMensaje, leerMensaje, vaciarMensajes
} from '../../../redux/actions/message';
import { login, logout } from '../../../redux/actions/user';
import LoginComponent from '../../pure/forms/Login/LoginComponent';
// import TaskListComponent from '../../components/container/TaskListComponent';


export default function Messages() {
    //const [messages, setMessages] = useState([]);
    const messages = useSelector(state => state.mensajes);
    const userData = useSelector(state => state.user);
    console.log(userData);
    const dispatch = useDispatch();

    function newMessage(mensaje) {
      let nuevo = {
            "asunto": mensaje.asunto,
            "email": mensaje.email,
            "mensaje": mensaje.mensaje,
            "leido": false
      };
      dispatch(crearMensaje(nuevo));
    };

    let readMessage = (index) => { dispatch(leerMensaje(index))};

    let deleteMessages = () => { dispatch(vaciarMensajes()) };
    
    let deleteMessage = (index) => { dispatch(borrarMensaje(index)) };


    function setLogin(user) {
      let userLogin = {
            email: user.email,
            password: user.password,
            isLogin: true
      };
      dispatch(login(userLogin));
    };

    let setLogout = () => {
      dispatch(logout());
    }

    return (
      <div >
          {!userData.isLogin &&
            <div className="messages">
                <LoginComponent   send={setLogin}>
                </LoginComponent>
              </div>
          
          }   
          { userData.isLogin &&
            <div className="messages">
              <div className="flex">
                <button className="clean" onClick={setLogout}>Logout</button>
              </div>
            
          
            <div className="messages">
              <MessageHeader clickNuevo={newMessage}  send={newMessage}>
              </MessageHeader>
              
              <MessageTable messages={messages} clickEliminar={deleteMessages} clickEliminarUno={deleteMessage} clickCheckRead={readMessage}>
              </MessageTable>
            </div>
          </div>
          }     
        {/* <TaskListComponent></TaskListComponent> */}
      </div>
    );
  }