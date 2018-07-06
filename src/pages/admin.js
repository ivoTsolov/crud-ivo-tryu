  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  //action creators and ajax


  //ui elements
  import {Row, Container} from 'reactstrap';
  

  //components
  class Blog extends Component {
    constructor(props) {
      super(props); 
      this.state = {postToEdit: null};
    
    }




    render() {
      return (
      
        <Container fluid={true}>
zdasdas
        </Container>
  
      );
    }
  }

  function mapStateToProps(state){
    return{

    }
  }
  export default connect(mapStateToProps, { 


  })(Blog);