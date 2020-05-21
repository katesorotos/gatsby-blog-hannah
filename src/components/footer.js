import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import FooterWrapper from '../styles/layout/footerStyles';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    developer
                    email
                }
            }
        }
    
    `)

    return (
        <FooterWrapper>
            <footer>
            <span>Want to collaborate?{' '}
      </span>

      <span>
        Let's connect! <br />
        Email me: <a href="/">{data.site.siteMetadata.email}</a>
        <br />
        or{' '}
        <span>
          Follow me: <a href="https://www.instagram.com/hannahmaybaldwin/">@hannahmaybaldwin</a>
        </span>
      </span>
      <small>&copy;{new Date().getFullYear()} - {data.site.siteMetadata.developer}</small>
         </footer> 
        </FooterWrapper>
    )
}

export default Footer;