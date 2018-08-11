//basic stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';
//action creators and ajax
 

//ui elements
import { Row, Container, Col } from 'reactstrap';

//components
class Footer extends Component {
 

    render() {
        return (
            <Container fluid={true}>
                <Row className="footer">
                    <Col>

                    </Col>

                </Row>
                            
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}
export default connect(
 
)(Footer);
