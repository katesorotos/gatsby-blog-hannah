import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    developer
                }
            }
        }
    
    `)

    return (
        <footer className={footerStyles.footer}>
            <p>© 2020 - {data.site.siteMetadata.developer}</p>
        </footer>
    )
}

export default Footer;