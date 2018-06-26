import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'reactstrap';
import Home from './pages/home';
import Blog from './pages/blog';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
 

//components
class App extends Component {
  render() {
    return ( 
        <Router>
          <Container fluid={true}>
              <Navbar/>
              <Route exact path="/" component={Home}/>
              <Route exact path="/blog" component={Blog}/>
           </Container>
        </Router>
    );
  }
}

export default App;
