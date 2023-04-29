import './Style/App.css';
import firebase  from 'firebase/compat/app'
import 'firebase/compat/firestore'
import React from 'react';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import NavigationPage from "./Navigation";





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


export default function App() { //hier war davor kein function
  return (
  <>
   <Routes>
    <Route exact path='/' element={<LandingPage />} />
    <Route path='/:id' element={<NavigationPage />} />
   </Routes>
   </>
  )
} 
