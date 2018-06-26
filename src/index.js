import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

//redux stuff
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

//devTools
import {composeWithDevTools} from 'redux-devtools-extension';

//custom components from frameworks // redux
import {Provider} from 'react-redux';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const store = createStore(

    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk))
   
)
 
    if (module.hot) {
      module.hot.accept('./rootReducer', () => {
        store.replaceReducer(rootReducer)
      })
    }
 

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>
        , document.getElementById('root'))
      
      if (module.hot) {
        module.hot.accept('./App', () => {
          ReactDOM.render(
            <Provider store={store}>
              <App />
            </Provider>,
            document.getElementById('root'),
          )
        })
      }
