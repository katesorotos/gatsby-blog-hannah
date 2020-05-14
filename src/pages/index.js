import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import IndexPageWrapper from '../styles/indexStyles';

import Twitter from '../images/SVG/TwitterSVG';
import Instagram from '../images/SVG/InstagramSVG';
import Linkedin from '../images/SVG/LinkedinSVG';
import Resume from '../images/SVG/ResumeSVG';

const indexPage = () => {
    return (
        <Layout>
            <IndexPageWrapper>
            <Head title="Home"/>
            <div className="indexIntro">
          <h1 className="headline">
            I'm Hannah May Baldwin,
            <br />a freelance Journalist.
          </h1>
          <ul className="introSocialLinks">
            <li>
              <a
                target="_blank"
                href='/'
                rel="noopener"
                aria-label="My twitter profile"
              >
                <Twitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href='https://www.instagram.com/hannahmaybaldwin/'
                rel="noopener"
                aria-label="My Instagram page"
              >
                <Instagram />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href='/'
                rel="noopener"
                aria-label="My linkedin profile"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href='/'
                rel="noopener"
                aria-label="My CV"
              >
                <Resume />
              </a>
            </li>
          </ul>
        </div>

        <p><Link to='/contact'>Get in touch?</Link></p>
        </IndexPageWrapper>
        </Layout>
    )
}

export default indexPage;




