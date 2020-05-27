import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { LayoutWrapper } from '../styles/layout/layoutStyles';
import ThemeToggleBtn from '../components/themeToggleButton';
import MobileNav from '../components/mobileNav';

import Footer from '../components/footer';
import Header from '../components/header';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';


const Layout = ({ children }) => {
    // subscribes to value from ../utils/ThemeContext.js and
    // gives current theme to styled-components <ThemeProvider>
    let [mobileNavIsOpen, toggleMobileNav] = useState(false);
  
    const mobileNavAction = () => {
      toggleMobileNav(
        mobileNavIsOpen ? (mobileNavIsOpen = false) : (mobileNavIsOpen = true)
      );
    };
  
    // adds smooth scrolling
/*     useEffect(() => {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line global-require
        require('smooth-scroll')('a[href*="#"]');
      }
    }); */

    return (
      <LayoutWrapper>
        <div style={{ position: 'absolute', top: '0', zIndex: '1' }}>
          <Header />
          <MobileNav
            mobileNavIsOpen={mobileNavIsOpen}
            action={mobileNavAction}
          />
        </div>

        <main>{children}</main>


        <Footer />
      </LayoutWrapper>

  );
};

Layout.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
    seo: PropTypes.object.isRequired,
  };
  
export default Layout;