import React  from 'react';
import { useState, useContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import { login, logout } from './redux/actions/user';
import { GuardLogin } from './routes/GuardLogin'

//Components
import MenuComponent from './components/container/menu/MenuComponent';
//import LoginComponent from'./components/pure/forms/Login/LoginComponent';
import CardDetailsProductComponent from './components/pure/CardDetailsProductComponent/CardDetailsProductComponent';

//Pages
import About from './pages/about/AboutPage';
import Store from './pages/store/StorePage';
import ToDo from './pages/to-do/ToDoPage';
import './App.scss';
import logo from './logo.svg';
import LoginStoreComponent from './components/pure/forms/LoginStore/LoginStoreComponent.jsx';
import { AppContext } from './store/provider';


//Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const LOGGED = 'LOGGED';

//Reducer contextState
const reducer = (state, action) => {
    debugger
  switch (action.type) {
    case LOGIN:
      state = {
        email: action.email,
        password: '******',
        isLogin: true
      }
      return state 
    case LOGOUT:
      state = {
        email: '',
        password: '',
        isLogin: false
      }
      return state;
    case LOGGED:
      return state = {
        email: action.email,
        password: '******',
        isLogin: true
      };
    default:
      break;
  }
}




function App() {
  const initialStateUser = {
      email: '',
      password: '',
      isLogin: false
  }
  const [isLogged, setLogged] = useState(false);
  const context = useContext(AppContext)
  //Asign userReducer to state, reducer and disparch actions
  const [stateUser, dispatch] = useReducer(reducer, initialStateUser);



  function setLogin(user) {
    debugger

    if(!localStorage.getItem(user.email) && !user.isLogin){ 
      let userLogin = {
        email: user.email,
        password: user.password,
        isLogin: true,
        type: 'LOGIN'
      };
      localStorage.setItem(user.email, JSON.stringify(userLogin))
      dispatch(userLogin);
      setLogged(true);      
    } else if (!user.isLogin){
      let userLogin = {
        email: user.email,
        password: user.password,
        isLogin: true,
        type: 'LOGGED'
      };
      localStorage.setItem(user.email, JSON.stringify(userLogin))
      setLogged(true);
      dispatch(userLogin);
    }
    console.log(stateUser);
  };

  let setLogout = () => {
    setLogged(false);
    dispatch( {type: 'LOGOUT'});
  }
  

  return (
    <AppContext.Provider value={stateUser}>
       <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactJS | Imagina Formación</h1>
          {isLogged ? <MenuComponent/> : <LoginStoreComponent  send={setLogin}/>}
          {/* 
          {isLogged ? <MenuComponent/> : <LoginComponent  send={setLogin}/>
            
           */}
            {isLogged ? <button className="clean" onClick={setLogout}>Logout</button> : <span></span>}
        </header>
        <div className="App-body">
          {isLogged &&<Route  path="/todo" component={ToDo}/>}
          {isLogged && <Route path="/store" component={Store}/>}
          {isLogged && <Route exact path="/about" component={About}/>}
          {isLogged &&  <Redirect to='/store'/>  }
          <Route exact path="/register" component={Store}/>

          
          <Route path="/product/:id" component={CardDetailsProductComponent}/>
         
         
        </div> 
        <footer></footer>
      </Router> 
    </div>
    </AppContext.Provider>
   
  );
}

export default App;
