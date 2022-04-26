import React from 'react';
import './Topmenu.css';

function Topmenu() {
  return (
    <nav className='navbar'>
      <div id='trapezoid'>
        <a className='sub-home' href='#'>
          Home 
        </a>
        <a href='/vacations' className='expandHome'>
          Vacations
        </a>
        <a href='/users/login' className='expandHome'>
          Login
        </a>
        <a href='/users/register' className='expandHome'>
        Register
        </a>
      </div>
    </nav>
  );
}
export default Topmenu;
