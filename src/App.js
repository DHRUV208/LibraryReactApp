import Register from "./Components/Register";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import "./App.css";
// import LoginForm from './Components/forms/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
// import List from "./Components/List";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Library from "./Components/Library";
// import { render } from '@testing-library/react';
import { Component } from "react";
// import loginForm from './Components/forms/LoginForm';
import axios from "axios";
import Contact from "./Components/Contact";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      posts: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        //console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loginHandler = () => {
    // alert("Login");
    this.setState({ auth: !this.state.auth });
  };
  render() {
    return (
      <Router>
        {/* <NavBar login={this.loginHandler} status ={this.state.auth}/> */}
        <NavBar />
        <Switch>
          <Route exact path="/about">
            <Header title="About Us" />

            <About />
          </Route>

          <Route exact path="/contact">
            <Header title="Contact Us" />
            <Contact />
          </Route>

          <Route exact path="/login">
            <Header title="Login" />
            <LoginForm />
            {/* login={this.loginHandler} status ={this.state.auth} */}
          </Route>

          <Route exact path="/register">
            <Header title="Register" />
            <Register />
            {/* (<Redirect to = "/login">) */}
          </Route>

          {/* CREATE  */}
          <Route exact path="/create">
            <Header title="Create" />
            <Create />
          </Route>
          {/* READ  */}
          <Route exact path="/read">
            <Header title="Read" />
            <Read />
          </Route>

          {/* UPDATE  */}
          <Route exact path="/update">
            <Header title="Update" />
            <Update />
          </Route>

          {/* <Route exact path="/library/read">
    {this.state.auth === false ? 
  
  (<Redirect to ="/login" />  
):(
<>
 <Header title="Read"/>
 <Read/>
  
</>
)
  
} */}

          {/* </Route>  */}
          {/* <Route exact path="/library/create">
    {this.state.auth === false ? 
  
  (<Redirect to ="/login" />  
):(
<>
 <Header title="Create"/>
 <Create/>
  
</>
)
  
} */}

          {/* </Route>  */}

          {/* <Route exact path="/library/update">
    {this.state.auth === false ? 
  
    (<Redirect to ="/login" />  
  ):(
  <>
   <Header title="Update"/>
   <Update/>
    
  </>
  )
    
  }
    
    
    </Route>  */}

          <Route exact path="/library">
            {this.state.auth === false ? (
              <Redirect to="/" />
            ) : (
              <>
                <Header title="Welcome to  E-LIBRARY" />
                <Library />
              </>
            )}
          </Route>
          <Route exact path="/">
            <Header title="Welcome to Zeeve Library" />
            <Home />
          </Route>
          <Route path="*">
            <Header title=" not Found" />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
