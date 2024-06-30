import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
