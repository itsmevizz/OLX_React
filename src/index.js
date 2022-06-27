import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fireBaseCotext } from './Store/firebaseContext'
import Context from './Store/firebaseContext'
import firebase from './firebase/config'

ReactDOM.render(

    <fireBaseCotext.Provider value={{firebase}}>
        <Context>
        <App />
        </Context>
    </fireBaseCotext.Provider>
    , document.getElementById('root'));
