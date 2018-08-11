import { UPDATE_A_WEATHER, SET_WEATHER } from '../actions/actionTypes';
 
import axios from 'axios';


const initialState = {
     place: '',
     weatherInfo: []
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case UPDATE_A_WEATHER:

         /*does not mutate data it works exactly like immutable.js... creates a new instance of the object 
          the syntax might be a bit hard to understand but you can check in redux website for examples i just
          dont see why to install a whole new library and use getIn or setIn at this point. */


            return {
                ...state,
                [action.payload.key]: action.payload.value
            };

        case SET_WEATHER: 
            return {
                ...state,
                weatherInfo: action.payload
            };
         
        default:
            return state;
    }
}

export function update(key, value) {
    return {
        type: UPDATE_A_WEATHER,
        payload: {
            key: key,
            value: value
        }
    };
}

export function set_weather(weather) {
    return {
        type: SET_WEATHER,
        payload: weather
    };
}

export function getWeather(){
    return (dispatch, getState)=>{
        return axios.get('/weather').then((res)=>{
            dispatch(set_weather(res.data));
        });

    }
}
 
 
 
