import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contactus from './Components/Contactus';
import Header from './Components/Header';
import CourseDetail from './Components/CourseDetail';

function App() {
  return (
    <Router>
      <div className='app-container'>
      <Header/>
      <Routes>
        <Route path="/firdavsreactbot" element={<Home/>}/>
        <Route path="/firdavsreactbot/contactus" element={<Contactus/>}/>
        <Route path='/firdavsreactbot/courseDetail/:id' element={<CourseDetail/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
