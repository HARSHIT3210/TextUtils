import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
  <Navbar title = "textutils" aboutText = "About Us5"></Navbar>
  <div className='container'>
    <TextForm heading = "Enter The Text"></TextForm>
  </div>
  </>
  );
}

export default App;
