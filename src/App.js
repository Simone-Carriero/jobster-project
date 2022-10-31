import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Landing, Dashboard, Register, Error } from './pages/index';

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
    </BrowserRouter>
  );
}

export default App;
