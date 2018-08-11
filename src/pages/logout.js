  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  //action creators and ajax
  import {update,logMeOut} from '../reducers/logins';

  //ui elements
  import {Container, Button, Row, Col} from 'reactstrap';
  

  //components
  class Logout extends Component {
    
    render() {
      return (
      
        <Container style={{marginTop: "50px"}}>
            <Row>
                <Col>
                    <h1>Please give us feedback before you Logout</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button onClick={()=>{
                       this.props.logMeOut().then(()=>{
                        this.props.history.push("/")
                       })
                }}>
                Log me out
                </Button>
                </Col>
            </Row>
           
        </Container>
  
      );
    }
  }

  function mapStateToProps(state){
    return{
      
    }
  }
  export default connect(mapStateToProps, { 
    update,
    logMeOut
  


  })(Logout);