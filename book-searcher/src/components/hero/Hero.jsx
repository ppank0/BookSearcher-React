import './hero.css'
import React, { Component } from 'react'
import searchIcon from '../../img/icons-search.svg'

class Hero extends Component {
    render() {
      return (
        <main className='hero-section'>
            <p className='hero-p'>Find Book You Need</p>
            <div className="hero-search">
                <input className='search-input' type="text" placeholder="Enter your book name" />
                <a href="#!"><img className='hero__search-icon' src={searchIcon} alt="" /></a>
            </div>
        </main>
      );
    }
  }
  
  export default Hero;