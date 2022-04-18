import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        {/*<Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />*/}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <div className='PageView'>
        <div className='Header'>header</div>
        <div className='Menu'>Menu</div>
        <div className='Footer'>Footer</div>
      </div>
    </div>
  );
}

export default App;
