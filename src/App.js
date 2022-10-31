import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='landing'
          element={<Landing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
