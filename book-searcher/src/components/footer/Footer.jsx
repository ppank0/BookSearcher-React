import './footer.css'
import React, { Component } from 'react'
import footerImg from '../../img/github.svg'

class Footer extends Component {
    render() {
      return (
        <footer>
            <p><img src={footerImg} alt="" /><a href="http://github.com/ppank0">http://github.com/ppank0 </a>| 2023</p>
        </footer>
      );
    }
  }
  
  export default Footer;