import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ContactProvider } from './Contact/ContactContext';
import ContactList from './Contact/ContactList';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* <link >
        </link> */}
      </nav>
      <ContactProvider>
        <Routes>
          <Route path='/' element={<ContactList/>} />
        </Routes>
      </ContactProvider>
      
    </BrowserRouter>
  );
}

export default App;
