import {POST_CREATED, ACCOUNT_FAILED} from '../actions/actionTypes';
import {POST_FAILED} from '../actions/actionTypes';
import {UPDATE_A_POST} from '../actions/actionTypes';
import {SET_POSTS} from '../actions/actionTypes';
import {ACCOUNT_CREATED} from '../actions/actionTypes';
import {LOGIN_SUCCESS} from '../actions/actionTypes';
import {LOGIN_FAILED} from '../actions/actionTypes';
import axios from 'axios';

// hash import
import bcrypt from 'bcryptjs';
//


const saltEnv = process.env.REACT_APP_SECRET_CODE;

const initialState = {
    post: '',
    postCreated: null,
    posts : [

    ],
    registered: false,
    username: "",
    password: "",
    logedIn: null
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
        case ACCOUNT_CREATED: 
            return {
                ...state,
                registered: true
            }
        case ACCOUNT_FAILED: 
            return {
                ...state,
                registered: false
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                logedIn: true
            }
        case LOGIN_FAILED:
            return {
                ...state,
                logedIn: false
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
//posts
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


 // accounts
 export function account_created(){
     return {
         type: ACCOUNT_CREATED
     }
 }

 export function account_failed(){
     return {
         type: ACCOUNT_FAILED
     }
 }

export function login_success(){
    return {
        type: LOGIN_SUCCESS
    }
}

export function login_failed(){
    return {
        type: LOGIN_FAILED
    }
}

 //
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

    export function createAccount(username, password) {  //remove params if second approach
        
        return(dispatch, getState ) =>{
            // const state = getState();
            // const params = {
            // username: state.posts.username,
            // password: state.posts.password
            // }
       return hashCreator(password).then((password)=>{
            console.log(password);
            
        return axios.post('/createAccount', {username, password})

        
        }).then(function(response){
            dispatch(account_created());
        }).catch(function(error) {
            dispatch(account_failed());})
            
        }
    }

export function logMeIn(username, password) {
    console.log(password);
    return (dispatch, getState) => {
      return hashCreator(password).then((password)=>{
          return  axios.post('/login', {username, password})         
        }).then((response)=>{
            dispatch(login_success());

        }).catch((error)=>{
            dispatch(login_failed());
        })
    }
}

 function hashCreator(passwordPromise) {
     console.log(process.env);
        let password = bcrypt.hash(passwordPromise, process.env.REACT_APP_SECRET_CODE);
        console.log(password);
        return password
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

  
