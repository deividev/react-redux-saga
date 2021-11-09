import React  from 'react';
import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, logout } from './redux/actions/user';
import { GuardLogin } from './routes/GuardLogin'

//Components
import MenuComponent from './components/container/menu/MenuComponent';
import LoginComponent from'./components/pure/forms/Login/LoginComponent';
import CardDetailsProductComponent from './components/pure/CardDetailsProductComponent/CardDetailsProductComponent';

//Pages
import About from './pages/about/AboutPage';
import Store from './pages/store/StorePage';
import ToDo from './pages/to-do/ToDoPage';
import './App.scss';
import logo from './logo.svg';



function App() {

  const dispatch = useDispatch();
  const [isLogged, setLogged] = useState(false);



  function setLogin(user) {
    debugger
    if(!localStorage.getItem(user.email) && !user.isLogin){ 
      let userLogin = {
        email: user.email,
        password: user.password,
        isLogin: true
      };
      localStorage.setItem(user.email, JSON.stringify(userLogin))
      dispatch(login(userLogin));
      setLogged(true);
    } else if (!user.isLogin){
      let userLogin = {
        email: user.email,
        password: user.password,
        isLogin: true
      };
      localStorage.setItem(user.email, JSON.stringify(userLogin))
      dispatch(login(userLogin));
      setLogged(true);
    }
  };

  let setLogout = () => {
    dispatch(logout());
    setLogged(false);
  }
  

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactJS | Imagina Formación</h1>

          {isLogged ? <MenuComponent/> : <LoginComponent  send={setLogin}/>}
          {isLogged ? <button className="clean" onClick={setLogout}>Logout</button> : <span></span>}
          
        </header>
        <div className="App-body">
          <GuardLogin  path="/todo" component={ToDo}/>
          <GuardLogin  path="/store" component={Store}/>
          {/* <Route exact path="/register" component={Store}/> */}

          <Route exact path="/about" component={About}/>
          <Route path="/product/:id" component={CardDetailsProductComponent}/>

          {isLogged ?  <Redirect to='/todo'/>  : <Redirect to='/login'/>}
        </div> 

        <footer></footer>
      </Router> 
    </div>
  );
}

export default App;
