import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'reactstrap';
//paths

//pages
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import RegistrationForm  from './pages/registerForm';
import Login from './pages/loginPage';
import Logout from './pages/logout';
import WeatherApp from './pages/weather';
import FiveDaysWeather from './pages/fiveDaysWeather';
//
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
 
 

//components
class App extends Component {
  render() {
      return (
          <Router>
              <div>
               <Navbar />
                  <Container fluid={true}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/admin" component={Blog} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/register" component={RegistrationForm}/>
                      <Route exact path="/login" component={Login}/>
                      <Route exact path="/logout" component={Logout}/>
                      <Route exact path="/weather" component={WeatherApp}/>
                      <Route exact path="/fiveDaysWeather" component={FiveDaysWeather}/>
                  </Container>
               
              </div>
          </Router>
      );
  }
}

export default App;
