import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import MobileNavWrapper from '../styles/mobileNavStyles';
import Hamburger from './hamburger';


const MobileNav = ({ mobileNavIsOpen, action }) => {
  return (
    <MobileNavWrapper isOpen={mobileNavIsOpen}>
      <Hamburger mobileNavIsOpen={mobileNavIsOpen} action={action} />

      <div className="mobileNav" data-testid="mobileNav">
        <div className="darkLayer" onClick={action} />
        <div id="mobileMenu">
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
                    <Link activeClassName="activePage" style={{marginTop: '10px'}} class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Portfolio </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link activeClassName="activePage" class="dropdown-item disabled" to="/portfolio/covid19/" tabindex="-1" aria-disabled="true">Covid 19</Link>
            <Link activeClassName="activePage" class="dropdown-item" to="/portfolio/margins/">Margins Magazine</Link>
            <Link activeClassName="activePage" class="dropdown-item" to="/portfolio/techno/">Techno is not for everyone</Link>
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
      </div>
    </MobileNavWrapper>
  );
};

MobileNav.propTypes = {
  mobileNavIsOpen: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default MobileNav;

