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
import { Row } from 'reactstrap';

//components
class Blog extends Component {
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
            <Row>
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
                    <input
                        type="text"
                        name="title"
                        value={this.props.title}
                        onChange={e => {
                            this.props.update(e.target.name, e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        name="imagePath"
                        value={this.props.imagePath}
                        onChange={e => {
                            this.props.update(e.target.name, e.target.value);
                        }}
                    />
                    <textarea
                        type="text"
                        name="body"
                        onChange={e => {
                            this.props.update(e.target.name, e.target.value);
                        }}
                    >
                        {this.props.body}
                    </textarea>
                    <button type="submit">POST</button>
                </form>
                <form
                    onSubmit={event => {
                        event.preventDefault();
                        this.props.getPosts();
                    }}
                >
                    <button type="submit">SHOW ALL POSTS</button>
                </form>

                {this.props.posts.map((post, idx) => {
                    return (
                        <p key={idx}>
                            {post.title}
                            <button
                                onClick={() => {
                                    this.setState({ postToEdit: post });
                                }}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => {
                                    this.props.deletePost(post._id);
                                }}
                            >
                                Delete
                            </button>
                        </p>
                    );
                })}

                {this.state.postToEdit && (
                    <div>
                        <input
                            name="title"
                            value={this.state.postToEdit.title}
                            onChange={this.changePostProperty}
                        />
                        <input
                            name="imagePath"
                            value={this.state.postToEdit.imagePath}
                            onChange={this.changePostProperty}
                        />
                        <textarea
                            name="body"
                            onChange={this.changePostProperty}
                        >
                            {this.state.postToEdit.body}
                        </textarea>
                        <button onClick={this.editPostAndHide}>SAVE</button>
                    </div>
                )}
            </Row>
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
)(Blog);
