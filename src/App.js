import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  SharedLayout,
  AddJob,
  AllJobs,
  Profile,
  Stats,
} from './pages/dashboard';
import { Landing, Register, Error } from './pages/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }>
          <Route
            index
            element={<Stats />}
          />
          <Route
            path='all-jobs'
            element={<AllJobs />}
          />
          <Route
            path='add-job'
            element={<AddJob />}
          />
          <Route
            path='profile'
            element={<Profile />}
          />
        </Route>
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
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
