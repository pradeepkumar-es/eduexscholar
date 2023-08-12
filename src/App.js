import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navabar from './Components/Navabar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
    <Navabar title="EduExScholar" text="AboutEES"/>
    <Alert alert="this is alert message"/>
    {/* <Navabar/>   */} 
    <BrowserRouter>
       <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/"element={<TextForm heading="Enter the text to analyse"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
