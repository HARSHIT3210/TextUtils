import './App.css';
import { useState } from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App() {
  const [mode, setkMode] = useState('light'); // This will tell if darkmode is enabled or not.

  const toggleMode = () => {
    if(mode === 'light'){
      setkMode('dark')
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setkMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
    return (
    <>
  <Navbar title = "TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert="This is Alert"/>
  <div className='container my-3'>
    <TextForm heading = "Enter The Text" mode={mode}></TextForm>
    {/* <About/> */}

  </div>
  
  </>
  );
}

export default App;

