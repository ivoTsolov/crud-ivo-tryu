import {ACCOUNT_CREATED, ACCOUNT_FAILED, LOGIN_SUCCESS, LOGIN_FAILED, LOG_OUT, UPDATE_A_POST  } from '../actions/actionTypes';

import axios from 'axios';

// hash import
import bcrypt from 'bcryptjs';
//


const initialState = {
    registered: false,
    username: '',
    password: '',
    logedIn: null,
};

export default function logins(state = initialState, action) {
    switch (action.type) {
        case UPDATE_A_POST:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };
        case ACCOUNT_CREATED:
            return {
                ...state,
                registered: true
            };
        case ACCOUNT_FAILED:
            return {
                ...state,
                registered: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                logedIn: true
            };
        case LOGIN_FAILED:
            return {
                ...state,
                logedIn: false
            };
        case LOG_OUT: 
            return {
                ...state,
                logedIn: false
            };
        default:
            return state;
    }
}

export function update(key, value) {
    return {
        type: UPDATE_A_POST,
        payload: {
            key: key,
            value: value
        }
    };
}
//posts

// accounts
export function account_created() {
    return {
        type: ACCOUNT_CREATED
    };
}

export function account_failed() {
    return {
        type: ACCOUNT_FAILED
    };
}

export function login_success() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function login_failed() {
    return {
        type: LOGIN_FAILED
    };
}


export function createAccount(username, password) {
    //remove params if second approach

    return (dispatch, getState) => {
        // const state = getState();
        // const params = {
        // username: state.posts.username,
        // password: state.posts.password
        // }
        return hashCreator(password)
            .then(password => {
                console.log(password);

                return axios.post('/createAccount', { username, password });
            })
            .then(function(response) {
                dispatch(account_created());
            })
            .catch(function(error) {
                dispatch(account_failed());
            });
    };
}

export function logMeIn(username, password) {
    console.log(password);
    return (dispatch, getState) => {
        return hashCreator(password)
            .then(password => {
                return axios.post('/login', { username, password });
            })
            .then(response => {
                dispatch(login_success());
            })
            .catch(error => {
                dispatch(login_failed());
            });
    };
}

export function logMeOut(){
    return dispatch => {
      dispatch({ type: LOG_OUT });
      return Promise.resolve();
    };
  }

function hashCreator(passwordPromise) {
    console.log(process.env);
    let password = bcrypt.hash(
        passwordPromise,
        process.env.REACT_APP_SECRET_CODE
    );
    console.log(password);
    return password;
}


