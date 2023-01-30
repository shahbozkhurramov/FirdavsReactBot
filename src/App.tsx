import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Contactus from './Components/Contactus';
import Header from './Components/Header';
import CourseDetail from './Components/CourseDetail';
import NotFound from './Components/NotFound';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path='/courseDetail/:id' element={<CourseDetail/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </div>
  );
}

export default App;
