  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  //action creators and ajax
  import {update,createAccount} from '../reducers/logins';

  //ui elements
  import {Row, Container, Input, Button, Col} from 'reactstrap';
  

  //components
  class RegistrationForm extends Component {
   


    render() {
      return (
      
        <Container style={{marginTop: "50px"}}>
            <h1>
                This is your registration form
            </h1>
            <Container style={{marginTop: "50px"}} className="registrationForm">
                <Input type="text" value={this.props.username} name="username" onChange={(e)=>{this.props.update(e.target.name, e.target.value)}}/>
                <Row>
                    <Col>
                        <p> You need to choose a password that’s long enough. There’s no minimum password length everyone
                        agrees on, but you should generally go for passwords 
                        that are a minimum of 12 to 14 characters in length. A longer password would be even better.</p>
                    </Col>
                </Row>
                <Input type="password" style={{marginBottom: "50px"}} name="password" value={this.props.password} onChange={(e)=>{this.props.update(e.target.name, e.target.value)}}/>
                <Button type="submit" onClick={()=>{this.props.createAccount(this.props.username, this.props.password).then(()=>{
                            this.props.history.push("/login")
                })}}>Register</Button>

            </Container>
        </Container>
  
      );
    }
  }

  function mapStateToProps(state){
    return{
      username: state.logins.username,
      password: state.logins.password,
      
    }
  }
  export default connect(mapStateToProps, { 
    update,
    createAccount
  


  })(RegistrationForm);