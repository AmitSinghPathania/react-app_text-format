import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React ,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link // used where user
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); // whether the dark mode is on or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success")
      // document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'grey';
      showAlert("Light mode has been enabled","success")

    }

  }

  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)

  }

  return (
   <>
  <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert} />
  <div className="container my-3">
    <TextForm showAlert = {showAlert} heading="Enter the text to analysis" mode={mode}/>
  </div>
  </>
  );
}

export default App;
