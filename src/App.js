import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Landing, Dashboard, Register, Error } from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route
            index
            element={<Dashboard />}
          />
          <Route
            path='landing'
            element={<Landing />}
          />
          <Route
            path='register'
            element={<Register />}
          />
          <Route
            path='*'
            element={<Error />}
          />
        </Route>
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
