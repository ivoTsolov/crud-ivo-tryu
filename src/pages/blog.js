//basic stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';
//action creators and ajax
import {
    update,
    create,
    getPosts,
    editPost,
    deletePost
} from '../reducers/posts';

//ui elements
import { Row, Input,  Button, Container, Col } from 'reactstrap';

//components
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { postToEdit: null };
        this.editPostAndHide = this.editPostAndHide.bind(this);
        this.changePostProperty = this.changePostProperty.bind(this);
    }

    editPostAndHide() {
        const {
            postToEdit: { _id, title, body, imagePath }
        } = this.state;

        this.props.editPost(_id, title, body, imagePath).then(() => {
            this.setState({ postToEdit: null });
        });
    }

    changePostProperty(e) {
        this.setState({
            postToEdit: {
                ...this.state.postToEdit,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        return (
            <Container>
                <Row>
                <Col>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        this.props.create(
                            this.props.title,
                            this.props.imagePath,
                            this.props.body
                        );
                    }}
                >
                    <h1>Blog List</h1>
                    <Input
                        type="text"
                        name="title"
                        value={this.props.title}
                        onChange={e => {
                            this.props.update(e.target.name, e.target.value);
                        }}
                    />
                    <Input
                        type="text"
                        name="imagePath"
                        value={this.props.imagePath}
                        onChange={e => {
                            this.props.update(e.target.name, e.target.value);
                        }}
                    />

                    <Input
                        value= {this.props.body}
                        type="textarea"
                        name="body"
                        onChange={e => {
                            this.props.update(e.target.name, e.target.value);
                        }}
                    />

                    <Button type="submit" style={{marginTop: '20px'}}>POST</Button>
                </form>
                </Col>
                </Row>
                <Row style={{marginTop:'50px'}}>
                <Col>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        this.props.getPosts();
                    }}
                >
                    <Button type="submit">SHOW ALL POSTS</Button>
                </form>
                </Col>
                </Row>
                <Row>

               
                {this.props.posts.map((post, idx) => {
                    return (
                        <Container key={idx}>
                            <Row>
                                <Col>
                                <h2>{post.title}</h2>
                                
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>
                                     {post.body}
                                    </p>
                                </Col>
                            </Row>
                            
                            
                            <Button
                                onClick={() => {
                                    this.setState({ postToEdit: post });
                                }}
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => {
                                    this.props.deletePost(post._id);
                                }}
                            >
                                Delete
                            </Button>
                        </Container>
                    );
                })}

                 </Row>
                

                {this.state.postToEdit && (
                    <div>
                        <Input
                            name="title"
                            value={this.state.postToEdit.title}
                            onChange={this.changePostProperty}
                        />
                        <Input
                            name="imagePath"
                            value={this.state.postToEdit.imagePath}
                            onChange={this.changePostProperty}
                        />
                        <Input
                            value= {this.state.postToEdit.body}
                            type="textarea"
                            name="body"
                            onChange={this.changePostProperty}
                        />
                        <Button onClick={this.editPostAndHide}>SAVE</Button>
                    </div>
                )}


            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        body: state.posts.body,
        title: state.posts.title,
        imagePath: state.posts.imagePath,
        posts: state.posts.posts
    };
}
export default connect(
    mapStateToProps,
    {
        update,
        create,
        getPosts,
        editPost,
        deletePost
    }
)(Admin);
