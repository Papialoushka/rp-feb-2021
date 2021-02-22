import React from 'react';
import logo from './../assets/logo.png';
import SearchForm from './search-form';
import Button from './button';

const Header = () => {
  return (
    <header className='header'>
      <div className='inner-wrapper'>
        <img src={logo} className='header-logo' alt='Netflix movies logo'/>
        <Button className='add-button' name='Add movie'/>
        <h1>Find your movie</h1>
        <SearchForm/>
      </div>
    </header>
  )
}

export default Header;
