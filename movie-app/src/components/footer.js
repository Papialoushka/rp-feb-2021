import React from 'react';
import logo from './../assets/logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='inner-wrapper'>
        <img src={logo} alt='netflix logo' className='footer-logo'/>
      </div>
    </footer>
  )
}

export default Footer;
