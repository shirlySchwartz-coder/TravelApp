import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Admin from './components/admin/Admin';
import Vacations from './components/vacations/Vacations';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Vacations />} />
        <Route path='/users/login' element={<Login />} />
        <Route path='/users/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
