import React from 'react'
import Home from '../Home'
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

  return (
    <div className='sidebar'>
       
        <button className='sidebar_item' onClick={() => handleNavigation('/')} aria-label="Home">
        <img src="assets/images/home.png" alt="Home" />
        </button>
     
     
      <button className='sidebar_item' onClick={() => handleNavigation('/shorts')} aria-label="shorts">
      <img
      src='assets/images/shorts.png' alt='shorts'/>
      </button>

      <button className='sidebar_item' onClick={() => handleNavigation('/subscriptions')} aria-label="shorts">
      <img
      src='assets/images/subscriptions.png' alt='subscriptions'/>
      </button>
    </div>
  )
}

export default Sidebar
