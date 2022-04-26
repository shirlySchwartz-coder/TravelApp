import React from 'react'
import Navbar from '../menulayout/Navbar'
import Topmenu from '../menulayout/Topmenu'

function Header() {
  return (
    <div className='Header'>
       {/*for none mobile view - need to make agestmentes
        <Topmenu/>*/}
     <Navbar/>
     <div className='head-line'>
        <h1>Start you'r vacation now!</h1>
      </div>
    </div>
  )
}

export default Header;
