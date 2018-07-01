  //basic stuff
  import React, { Component } from 'react';
  import {connect} from 'react-redux';
  //action creators and ajax
  import {update, create, getPosts, editPost, deletePost} from '../reducers/posts';

  //ui elements
  import {Row} from 'reactstrap';
  

  //components
  class Blog extends Component {
    constructor(props) {
      super(props); 
      this.state = {postToEdit: null};
      this.editPostAndHide = this.editPostAndHide.bind(this);
      this.saveEditedPost = this.saveEditedPost.bind(this);

    
    }

  editPostAndHide(content){
    this.props.editPost(content).then(()=>{
      this.setState({postToEdit: null});
    })
    
  }


  saveEditedPost(params) {
      this.setState({
        postToEdit: {
          ...this.state.postToEdit,
          post: params
        }
      })
  }
  
  



    render() {
      return (
      
        <Row>
          <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.create({ post: this.props.post })}}>
              <h1>Blog List</h1>
              <input type="text" name="post" value={this.props.post} onChange={(e)=>{this.props.update(e.target.name, e.target.value)}}/>
              <button type="submit">POST</button>
          </form>
          <form onSubmit={(event)=>{
            event.preventDefault();
            this.props.getPosts();
          }}>
            <button type="submit">SHOW ALL POSTS</button>
          </form>
          
            {this.props.posts.map((post, idx)=>{
              return <p key={idx}>{post.post}<button onClick={()=>{this.setState({postToEdit: post})}}>Edit</button>
              <button onClick={()=>{this.props.deletePost(post._id)}}>Delete</button>
              </p>
            })}
          
          { this.state.postToEdit &&
          <div>
            <textarea onChange={(event)=>{
                this.saveEditedPost(event.target.value);
            }}>
              {this.state.postToEdit.post}
            </textarea>
            <button onClick={()=>{this.editPostAndHide(this.state.postToEdit)}}>SAVE</button>

          </div>

          }
    
        </Row>
  
      );
    }
  }

  function mapStateToProps(state){
    return{
      post: state.posts.post,
      posts: state.posts.posts
    }
  }
  export default connect(mapStateToProps, { 
    update,
    create,
    getPosts,
    editPost,
    deletePost


  })(Blog);