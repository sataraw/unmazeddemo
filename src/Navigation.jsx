import './Style/App.css';
import firebase  from 'firebase/compat/app'
import 'firebase/compat/firestore'
import React, { useEffect } from 'react';
import ToolBar from './ToolBar';
import Content from './Content';
import SearchBar from './SearchBar';
//import React from "react";
import { useParams } from "react-router-dom";





const firebaseConfig = {
  apiKey: "AIzaSyC4y1MM8bx8Qi2qGWDYRXzCClJkyK-e7Ys",
  authDomain: "unmazeddemo.firebaseapp.com",
  projectId: "unmazeddemo",
  storageBucket: "unmazeddemo.appspot.com",
  messagingSenderId: "73326861454",
  appId: "1:73326861454:web:cc15c4c9944b7c9793fddf",
  measurementId: "G-EFTE1QCKTP"
};

firebase.initializeApp(firebaseConfig)

  /* function App() {
  return (
    <div className='OutsideWrapper'>
      <div className='AppWrapper'>
        <div className="App">
          <Content />
        </div>
        <ToolBar />
      </div>
    </div>
  );
} */


export default function App() { // hier war kein function etc
    let { id } = useParams();
    return (
    <>
    <div className='OutsideWrapper'>
      <div className='AppWrapper'>
        <div className="App">
          <Content />
        </div>
        <ToolBar />
      </div>
    </div> 
        
   </>
   
    )

}