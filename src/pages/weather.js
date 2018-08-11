  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  //action creators and ajax
  import {update, getWeather} from '../reducers/weather';

  //ui elements
  import {Container, Input, Button, Row, Col} from 'reactstrap';
 

  //components
  class WeatherApp extends Component {
 

    render() {
      return (
      <div className="weatherBackground">
        <Row>
        <Container fluid={true} className="presentation weatherApp">
        <Row>
          <Col>
            <h1 style={{textAlign:"center", color:"white", marginTop: '220px'}}>
            This is the Weather App
            </h1>
          </Col>
        </Row>
      </Container> 
      </Row> 
      <Row>
          <Col md={6}> 
                <h1>Find information about the weather in my city using fake data</h1>
                <Input
                    type="text"
                    name="place"
                    value={this.props.weather.place}
                    onChange={e => {
                        this.props.update(e.target.name, e.target.value);
                    }}
                    /> 
               <Button style={{marginTop: "20px"}} onClick={()=>{this.props.getWeather()
               .then(()=>{this.props.history.push("/fiveDaysWeather")})
                }}>Find</Button>
          </Col>
          <Col md={6}>
          <p> 
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum"
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum
          </p>
          </Col>
      </Row>
      </div>
      );
    }
  }

  function mapStateToProps(state){
    return{
      weather: state.weather
    }
  }
/* since i saw u have some requirments for static types
and i think PropTypes library is a thing in react - redux development 
and provides better solution than flow or typescript for this specific app i will use it for typechecking,
just becaouse we are goin to use mostly react props its easy and smooth approach
*/

  WeatherApp.propTypes = {
    update: PropTypes.func,
    getWeather: PropTypes.func
  }
  
  export default connect(mapStateToProps, { 
    update,
    getWeather
  


  })(WeatherApp);