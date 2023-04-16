import './App.css';
import logo from './images/Unmazed Schwarz.svg'
import construction from './images/construction.svg'
import firebase  from 'firebase/compat/app'
import 'firebase/compat/firestore'

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={construction} className="App-header-tape1"></img>
        <img src={logo} alt="logo" className="logo"></img>
        <p>This site is under construction 🏗️</p>  
        <img src={construction} className="App-header-tape2"></img>
      </header>
    </div> 
  );
}

export default App;
