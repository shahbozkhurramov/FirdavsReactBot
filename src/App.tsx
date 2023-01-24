import React from 'react';
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
        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path='/courseDetail/:id' element={<CourseDetail/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
