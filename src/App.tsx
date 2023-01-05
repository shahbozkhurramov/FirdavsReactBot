import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Home/>
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;
