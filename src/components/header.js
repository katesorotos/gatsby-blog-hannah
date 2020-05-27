import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import logo from '../images/favicon.png';
import HeaderWrapper from '../styles/layout/HeaderStyles';
import '../styles/layout/hamburgers.css';
import headerStyles from './header.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min.js'


const Header = () => {
    let [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (
          document.body.scrollTop > 30 ||
          document.documentElement.scrollTop > 30
        ) {
          setIsScrolled((isScrolled = true));
        } else {
          setIsScrolled((isScrolled = false));
        }
      });
    }, []); 


const [nav, showNav] = useState(false)

return (

    <HeaderWrapper isScrolled={isScrolled}>
        <div className="navContainer">
        <div id="logo">
          <Link  to="/" aria-label="to home page">
          <img className={headerStyles.logo}  style={{borderRadius: '0%'}} style={{marginTop: '30px'}} src={logo} alt="Logo" height='55' width='55' />
          </Link>
        </div>
            <nav>
              
            <ul>
            <li>
                <Link activeClassName="activePage" to="/">
                    Home
                </Link>
                </li>
                <li>
                <Link activeClassName="activePage" to="/about">
                    About Me
                </Link>
                </li>
                <li>
                <Link activeClassName="activePage" to="/blog">
                    Blog
                </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link activeClassName="activePage" style={{marginTop: '11px'}} class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Portfolio </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item disabled" to="/portfolio/covid19/" tabindex="-1" aria-disabled="true">Covid19</Link>
          <Link class="dropdown-item" to="/portfolio/margins/">Margins Magazine</Link>
          <Link class="dropdown-item" to="/portfolio/techno/">Techno is not for everyone</Link>
        </div>
      </li>

                <li>
                <Link activeClassName="activePage" to="/contact">
                    Contact
                </Link>
                </li>
            </ul>
            </nav>
            
        </div>
        </HeaderWrapper>
  );
};

export default Header;