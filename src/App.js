import logo from './logo.svg';
import './App.css';
import Messages from './views/Message/Messages.view';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactJS | Imagina Formación</h1>
      </header>
 
      <div className="App-body">
        <Messages></Messages>
      </div>  
    </div>
  );
}

export default App;
