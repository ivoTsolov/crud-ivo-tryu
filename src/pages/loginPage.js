  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  //action creators and ajax
  import {update,logMeIn} from '../reducers/posts';

  //ui elements
  import {Row, Container, Input, Button, Col} from 'reactstrap';
  

  //components
  class RegistrationForm extends Component {
    constructor(props) {
      super(props); 
      this.state = {postToEdit: null}    
    }

  
  



    render() {
      return (
      
        <Container style={{marginTop: "50px"}}>
            <h1>
                This is your login
            </h1>
            <Container style={{marginTop: "50px"}} className="registrationForm">
                <Input type="text" value={this.props.username} name="username" onChange={(e)=>{this.props.update(e.target.name, e.target.value)}}/>
                <Row>
                    <Col>
                        <p>For simplicty this app doesnt have most of the proffesional features i would provide. Its just a demon
                         so you can login and take a look at my admin panel, and my work as a fullstack developer.
                        </p>
                    </Col>
                </Row>
                <Input type="password" style={{marginBottom: "50px"}} name="password" value={this.props.password} onChange={(e)=>{this.props.update(e.target.name, e.target.value)}}/>
                <Button type="submit" onClick={()=>{this.props.logMeIn(this.props.username, this.props.password)}}>Login</Button>

            </Container>
        </Container>
  
      );
    }
  }

  function mapStateToProps(state){
    return{
      username: state.posts.username,
      password: state.posts.password,
    }
  }
  export default connect(mapStateToProps, { 

    update,
    logMeIn


  })(RegistrationForm);