import './App.css';
import logo from './images/Unmazed Schwarz.svg'
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
        <img src={logo} alt="logo" className="logo"></img>
        <p>Work in Progress 🚀</p>
      </header>
    </div>
  );
}

export default App;
