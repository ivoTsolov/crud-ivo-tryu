  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  //action creators and ajax
   
  //custom css for this page

  import './weather.css';

  //ui elements
  import {Container, Row, Col} from 'reactstrap';
  import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
  

  //components
  class FiveDaysWeather extends Component {
    constructor(props) {
      super(props); 
      this.state = { backgroundChanger : "" }
    }

     
    componentDidMount() {
        let cloudyArray;
        let sunnyArray;
        let rainyArray;
        let snowyArray;

        function BackgroundSwitcher(obj){
          this.obj = Object.keys(obj);
        }
    }

    render() {
      return (
      <div className="fiveDaysWeatherBg">
        <Row>
            <Container>
                    <h1>The city you have picked is {this.props.place} and you will have .... week in general</h1>
            </Container>     
        </Row> 
        <Row>

        </Row>
   
      </div>
      );
    }
  }

  function mapStateToProps(state){
    return{
      place: state.weather.place,
      weatherInfo: state.weather.weatherInfo
    }
  }
/* since i saw u have some requirments for static types
and i think PropTypes library is a thing in react - redux development 
and provides better solution than flow or typescript for this specific app i will use it for typechecking,
just becaouse we are goin to use mostly react props its easy and smooth approach
*/

FiveDaysWeather.propTypes = {
   
  }
  
  export default connect(mapStateToProps, { 
   
    


  })(FiveDaysWeather);