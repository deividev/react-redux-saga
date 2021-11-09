import './ToDoPage.scss';
import Messages from '../../components/container/Message/MessagesContainer';
 


export default function Store(props) {
  return (
    <div className="Store">
      <h1 className="title">Bienvenido a tu list To-Do</h1>
      <Messages></Messages>
    </div>
  );
}