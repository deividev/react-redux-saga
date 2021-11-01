import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Messages from './components/container/Message/MessagesContainer';
import MenuComponent from './components/container/menu/MenuComponent';
import About from './pages/about/AboutPage';
import Store from './pages/store/StorePage';
import './App.scss';
import logo from './logo.svg';



function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactJS | Imagina Formación</h1>
          <MenuComponent></MenuComponent>
        </header>
      
          <div>
            <Route exact path="/" component={Store}/>
            <Route exact path="/task" component={Messages}/>    
            <Route exact path="/about" component={About}/>
          </div>
        
        <div className="App-body">
          <Messages></Messages>
        </div> 
      </Router> 
    </div>
  );
}

export default App;
