

import './App.css';
// import LoginForm from './Components/forms/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
  
} from "react-router-dom";
import NavBar from './Components/NavBar';
// import List from "./Components/List";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './Components/Home';
import About from './Components/About';
import Library from './Components/Library';
// import { render } from '@testing-library/react';
import { Component } from 'react';
// import loginForm from './Components/forms/LoginForm';




class App extends Component {
 
  constructor(props) {
    super(props);
  
    this.state = {
      auth :false

    };
  }
  loginHandler = ()=>{
      // alert("Login");
    this.setState({auth : !this.state.auth});
  } ;
  render(){
  return (
    <Router>
     
    <NavBar login={this.loginHandler} status ={this.state.auth}/>
    <Switch>
    <Route exact path="/about">
     <Header title="About Us"/> 
    
    <About/>
    </Route>
    
   
    {/* <Route exact path="/contact">
    <Header title="Contact Us"/>
    <Contact/>
    </Route> 
     */}
      <Route exact path="/library">
    {this.state.auth === false ? 
    (<Redirect to ="/"/>  
  ):(
  <>
   <Header title="E-LIBRARY"/>
      <Library/>
    
  </>
  )

  }
    
    </Route>
      <Route  exact path="/"> 

    <Header title="Welcome to Zeeve Library"/>
    <Home/>
    </Route>
    <Route path = "*">
    <Header title=" not Found"/>
    </Route>
    </Switch>
   
    <Footer/>
    </Router>
  );
}
}

export default App;
