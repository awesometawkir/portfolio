import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.svg';
import Profile from './pages/Profile';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName='awesometawkir' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
