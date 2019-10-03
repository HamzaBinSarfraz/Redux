// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import { createStore, combineReducers } from 'redux';



const reducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };

            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };

            break;
    }
    return state;
};

const userReducer = (state = {
    name: 'hamza',
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };

            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };

            break;
    }
    return state;
};

const store = createStore(combineReducers({reducer, userReducer}));

store.subscribe(() => {
    console.log('Store updated: ', store.getState());
});


store.dispatch({
    type: "ADD",
    payload: 66
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "SUBTRACT",
    payload: 67
});

store.dispatch({
    type: "SET_AGE",
    payload: 30
});

