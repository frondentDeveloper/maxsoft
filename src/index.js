import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {BrowserRouter} from "react-router-dom";
import "firebase/firestore";
import "firebase/auth"
import firebase from "firebase"
import {createStore} from "redux";
import {MyReducers} from "./components/Reducer/MyReducer";
import Provider from "react-redux/es/components/Provider";


   firebase.initializeApp({
       apiKey: "AIzaSyA0o07awLlcN-fZ-7u-0eTXBPX_91Ngfg0",
       authDomain: "maxsoft-chat.firebaseapp.com",
       projectId: "maxsoft-chat",
       storageBucket: "maxsoft-chat.appspot.com",
       messagingSenderId: "905582672467",
       appId: "1:905582672467:web:e9351bee3eb11c4b77e4a6",
       measurementId: "G-XT45GWC74L"
   });

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

const store = createStore(MyReducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
         <Context.Provider  value={{firestore , auth, firebase}}>
             <Provider store={store}>
                 <App />
             </Provider>
         </Context.Provider>
      </BrowserRouter>
  </React.StrictMode>
);

