	
import './MessageHeader.css';
 
export default function MessageHeader(props) {
  return (
    <div className="messageHeader">
      <button onClick={props.clickNuevo} className="new">Nuevo</button>
      <button onClick={props.clickEliminar} className="clean">Vaciar</button>  
    </div> 
  );
}