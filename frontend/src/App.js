import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainPage from './pages/MainPage'
import ErrorPage from './pages/ErrorPage'
  

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  </Router>
  );
  }


export default App;


