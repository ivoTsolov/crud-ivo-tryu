
import {POST_CREATED} from '../actions/actionTypes';
import {POST_FAILED} from '../actions/actionTypes';
import {UPDATE_A_POST} from '../actions/actionTypes';
import {SET_POSTS} from '../actions/actionTypes';
import axios from 'axios';


const initialState = {
    post: '',
    postCreated: null,
    posts : [

    ]
}

 export default function posts(state = initialState, action)  {
      
    switch(action.type){
         case UPDATE_A_POST:
            return {
                ...state,
                 [action.payload.key] : action.payload.value
            }
        case POST_CREATED: 
            return {
            ...state,
            postCreated: true
        }
        case POST_FAILED: 
            return {
                ...state,
            postCreated: false

            }
        case SET_POSTS: 
            return { 
                ...state,
                posts: action.payload

            }
        default: return state
        }
 }

 export function update(key,value){ 
    return {
        type: UPDATE_A_POST,
        payload: {
            key: key,
            value: value
        }
    }
 }

 export function post_created() {
    return {
        type: POST_CREATED
    }
 }
 export function post_failed(){
     return {
         type: POST_FAILED
     }
 }
export function set_posts(posts){
    return {
        type: SET_POSTS,
        payload: posts
    }
} 
 export function create(params) {
     console.log(JSON.stringify(params));
    return (dispatch, getState) => {
        axios.post('/makeApost', params)
            
          .then(function(response) {
            dispatch(post_created())
            console.log(response);
          })
          .catch(function (error) {
            dispatch(post_failed())
            console.log(error);
          });
    };
 }

 export function getPosts(){
    return (dispatch, getState) => {
        axios.get('/getAllPosts').then((res)=>{
            dispatch(set_posts(res.data));
         });
    }
   
 }

 export function editPost(params){
     return (dispatch, getState) => {
        return axios.put('/editApost', params).then((res)=>{
           dispatch(getPosts());  
         })
     }
 }

 export function deletePost(params) {
     return (dispatch, getState) => {
         return axios.delete(`/post/${params}`).then((res)=>{
            dispatch(getPosts());
         });
     }
 }

  


