//basic stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../reducers/posts';
//action creators and ajax

//ui elements
import { Row, Container } from 'reactstrap';

function wrapWithHOC(additionalProp) {
    return OriginalComponent =>
        class SomeHOC extends Component {
            render() {
                return (
                    <div>
                        Muahaha
                        <OriginalComponent
                            addedProp={additionalProp}
                            {...this.props}
                        />
                    </div>
                );
            }
        };
}

class FakeComponent extends Component {
    render() {
        return (
            <div>
                {this.props.addedProp}
                {this.props.something}
            </div>
        );
    }
}

const WrappedComponent = wrapWithHOC('shit')(FakeComponent);

//components
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { postToEdit: null };
    }
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <Container fluid={true}>
                <WrappedComponent something="trallallaa" />
                {this.props.posts.map(post => (
                    <div key={post._id}>{post.body}</div>
                ))}
            </Container>
        );
    }
}

function mapStateToProps({ posts: { posts } }) {
    return { posts };
}

export default connect(
    mapStateToProps,
    { getPosts }
)(Blog);
