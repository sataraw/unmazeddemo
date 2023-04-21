import './App.css';
import logo from './images/Unmazed Schwarz.svg'
import construction from './images/construction.svg'
import firebase  from 'firebase/compat/app'
import 'firebase/compat/firestore'
import React, { useState } from 'react';
import ToolBar from './ToolBar';
import currentPicture from './images/testImage.jpg'
import Slider from './Slider'




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

function App() {

  const [milliSeconds, setMilliSeconds] = useState(66);

  function handleSizeChange(event) {
    setMilliSeconds(event.target.value);
  }

  
  return (
    <div className="App">
      <img src={currentPicture} alt='testImage' className='testImage'></img>
      <Slider value={milliSeconds} onChange={handleSizeChange} />
      <ToolBar />
    </div> 
  );
}


export default App;
