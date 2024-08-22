import React from 'react';
import './Header.css';
import { AiFillVideoCamera, AiFillBell, AiFillSetting } from 'react-icons/ai';


function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <img
        src='/assets/images/menu.png'
        alt='menu'/>
      </div>
      <div className="header__logo">
      <img
        src='/assets/images/logo.png'
        alt='logo'/>
      </div>

       <div className='search'>
        <input type="text" className="search__input" placeholder="Search" />
        <div className="search__icon">
          <img src="/assets/images/search.png" alt="Search" className="search__icon-image" />
        </div>
        

      <div className="mic">
      <img
        src='/assets/images/mic.png'
        alt='mic'/>
      </div>
      </div>

      <div className="sign-in">
        <button className="sign-in__button">Sign In</button>
      </div>
    </header>
  );
}

export default Header;