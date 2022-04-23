import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  let [navbarState, setNavbarState] = useState(false);
  let [navbarClass, setNavbarClass] = useState('collapse navbar-collapse');
  let [menuText, setMenuText ]= useState('Menu');
  let menus = [
    {
      id: 1,
      text: 'Home',
      url: '/',
    },
    {
      id: 2,
      text: 'Login',
      url: '/users/login',
    },
    {
      id: 3,
      text: 'Vacations',
      url: '/vacations',
    },
    {
      id: 4,
      text: 'Contact',
      url: '/contact',
    },
  ];
  let logo = 'https://cdn.pixabay.com/photo/2017/04/08/18/45/plane-2214094_640.png';
  
  const navbarToggler = () => {
    let currentState = navbarState;
    currentState = !currentState;
    if (navbarState == true) {
      setNavbarClass('collapse navbar-collapse');
      setNavbarState(currentState);
      setMenuText('Menu');
    } else {
      setNavbarClass('collapse navbar-collapse show');
      setNavbarState(currentState);
      setMenuText('X');
    }
  };

  return (
    <div className='navbar myNavbar'>
      <nav className='navbar navbar-expand-sm bg-theme text-white'>
        <Link to='/' className='navbar-brand ml-5'>
          <img src={logo} alt='Logo' width='40px' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={navbarToggler}
        >
         
          <button className='text-black' value={menuText}>
            {menuText}
          </button>
        </button>
        <div className={navbarClass}>
          <ul className='navbar-nav ml-auto mr-5'>
            {menus.map((menu) => (
              <li key={menu.id} className='nav-item'>
                <Link to={menu.url} className='nav-link text-white'>
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
