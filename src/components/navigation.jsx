import React from 'react';
import Logo from '../images/logo.svg';
import Burger from '../images/hamburger.png';
import '../App.css';

const navigation = () => {
  return (
    <div className="nav-container">
      <div className="navbar row">
        <div className="logo col">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="nav-items col">
          <div className="item">
            <a href="tel:1-212-555-5555">212.555.5555</a>
          </div>
          <div className="item">
            <a href="#">LOG IN</a>
          </div>
          <div className="item">
            <img src={Burger} alt="burger"/>
          </div>
        </div>
      </div>
    </div>
  )

}

export default navigation;