import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactProvider from './Contact/ContactProvider';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* <link >
        </link> */}
      </nav>
      <Routes>
        <Route path='/' element={<ContactProvider/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
