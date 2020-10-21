import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.sass';
import App from './App';
import { firebaseConfig } from './config';

import * as firebase from 'firebase';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </Router>,
    document.getElementById('root'),
);
