import ReactDOM from 'react-dom'; // insert component into DOM
import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';


const createStoreWithMiddleware = applyMiddleware()(createStore);

// Create a new component. This component should produce some HTML
//const AppCmp = function() {
//    return <div><App /></div>;
//}
// Take this component's generated HTML and put it
// on the page (in the DOM)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware( () => {})}>
        <App />
    </Provider>
    ,document.querySelector('.container'));
