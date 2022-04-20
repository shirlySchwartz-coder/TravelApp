import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  let [navbarState, setNavbarState] = useState(false);
  let [navbarClass, setNavbarClass] = useState('collapse navbar-collapse');
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

  const navbarToggler = () => {
    if (navbarState == true) {
      setNavbarClass('collapse navbar-collapse');
      setNavbarState(false);
    } else {
      setNavbarClass('collapse navbar-collapse show');
      setNavbarState(true);
    }
  };

  return (
    <div className='navbar'>
      <nav className='navbar navbar-expand-sm bg-theme text-white'>
        <Link to='/' className='navbar-brand ml-5'>
          <img src='/' alt='Logo' width='40px' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          onClick={navbarToggler}
        >
          <span className='text-white'>Menu</span>
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
