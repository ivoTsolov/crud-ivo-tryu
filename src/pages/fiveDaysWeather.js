  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  import PropTypes from 'prop-types';
  //action creators and ajax
   
  //custom css for this page

  

  //ui elements
  import {Container, Row, Col} from 'reactstrap';
  import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
 
  

  class Day {
    constructor(name, forecast) {
      this.name = name
      this.forecast = forecast
    }

  }

  class WeatherForecast {
    constructor(weather, minTemp, maxTemp) {
        this.weather = weather
        this.minTemp  = minTemp
        this.maxTemp = maxTemp
    }

  }
  //components
  class FiveDaysWeather extends Component {
    
    constructor(props) {
      super(props); 
      this.state = { averageWeatherType : "" }
      this.getAverageWeatherType = this.getAverageWeatherType.bind(this);
      this.setAverageWeatherType = this.setAverageWeatherType.bind(this);
    
    }

    
    componentDidMount() {
  
        const weekdays = [
         "monday",
         "tuesday", 
         "wednesday", 
         "thursday", 
         "friday", 
         "saturday", 
         "sunday"];

        const dayIndex = new Date().getDay() - 1;
        const forecastDays = this.props.weatherInfo.map((day, idx) => {
        const weatherDay = weekdays[(dayIndex + idx + 1) % weekdays.length];
        const forecast = new WeatherForecast(
          day.weather, 
          day.minTemp, 
          day.maxTemp);
        return new Day(weatherDay, forecast);           
        });
        this.getAverageWeatherType(forecastDays);
          
        };
        
      getAverageWeatherType(forecastDays){
        let averageWeather;
        const ranking = ["snowy", "rainy", "cloudy", "sunny"];
        const rankSum = forecastDays.reduce((rankSum, day) => 
        rankSum + ranking.indexOf(day.forecast.weather),0);
        averageWeather = ranking[Math.round(rankSum / 5)];
        this.setAverageWeatherType(averageWeather);
         
     
        }
      setAverageWeatherType(mode) {
          switch(mode){
            case "sunny": {
              this.setState({ averageWeatherType: "sunny" })
            }
            break;
            case "cloudy": {
              this.setState({averageWeatherType: "cloudy"});
            }
            break;
            case "rainy": {
              this.setState({averageWeatherType: "rainy"});
            }
            break;
            case "snowy": {
              this.setState({averageWeatherType: "snowy"});
            }
            break;
            default: {
               this.setState({ averageWeatherType: "sunny"});
            }
          }
      }
        

    render() {
      return (
      <div className="fiveDaysWeatherBg">
        <Row>
            <Container fluid={true} className="dynamicClass">
                  <Container className="weatherWrapper">
                      <h1>The city you have picked is {this.props.place} and you will have { this.state.averageWeatherType } week in general</h1>
                  </Container>
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
   place : PropTypes.string
  }
  
  export default connect(mapStateToProps, { 
   
    


  })(FiveDaysWeather);