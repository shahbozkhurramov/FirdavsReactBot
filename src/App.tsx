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
        <Route path="/firdavsreactbot" element={<Home/>}/>
        <Route path="/firdavsreactbot/contactus" element={<Contactus/>}/>
        <Route path="/firdavsreactbot/aboutus" element={<AboutUs/>}/>
        <Route path='/firdavsreactbot/courseDetail/:id' element={<CourseDetail/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </div>
  );
}

export default App;
