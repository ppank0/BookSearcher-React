import './header.css'
import React, { Component } from 'react'
import img from '../../img/logo.svg'
import logoName from '../../img/logoName.png'

class Header extends Component {
    render() {
      return (
        <header className='header'>
            <img className='header-img' src={img} alt="" />
            <img className='header-logo' src={logoName} alt="" />
        </header>
      );
    }
  }
  
  export default Header;