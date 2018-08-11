import {combineReducers} from 'redux';
import posts from './reducers/posts'
import logins from './reducers/logins';
import weather from './reducers/weather';

export default combineReducers({
    posts,
    logins,
    weather
})