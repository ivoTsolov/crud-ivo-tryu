import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'reactstrap';
//pages
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import RegisterForm from './pages/registerForm';
//
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import RegistrationForm  from './pages/registerForm';
 

//components
class App extends Component {
  render() {
      return (
          <Router>
              <div>
                  <Navbar />
                  <Container fluid={true}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/blog" component={Blog} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/register" component={RegistrationForm}/>
                  </Container>
              </div>
          </Router>
      );
  }
}

export default App;
