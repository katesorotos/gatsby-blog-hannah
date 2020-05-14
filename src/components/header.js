import React, { useEffect, useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import logo from '../images/favicon.png';
import HeaderWrapper from '../styles/layout/HeaderStyles';
import '../styles/layout/hamburgers.css';
import headerStyles from './header.module.scss'

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
/* 
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    }
            }
        }
    `)
    
} */
return (
    <HeaderWrapper isScrolled={isScrolled}>
        <div className="navContainer">
        <div id="logo">
          <Link  to="/" aria-label="to home page">
          <img className={headerStyles.logo} src={logo} alt="Logo" height='55' width='55' />
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
                    About
                </Link>
                </li>
                <li>
                <Link activeClassName="activePage" to="/blog">
                    Blog
                </Link>
                </li>
                <li>
                <Link activeClassName="activePage" to="/portfolio">
                    Portfolio
                </Link>
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


// return (
//     <header className={headerStyles.header}>
//         <h1>
//             <Link className={headerStyles.title} to='/'>
//                 {data.site.siteMetadata.title}
//             </Link>
//         </h1>
//         <nav>
//             <ul className={headerStyles.navList}>
//                 <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link></li>
//                 <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link></li>
//                 <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blog</Link></li>
//                 <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link></li>
//             </ul>
//         </nav>
//     </header>
// )