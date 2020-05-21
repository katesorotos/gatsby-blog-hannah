import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import IndexPageWrapper from '../styles/indexStyles';
import '../styles/indexImage.scss';
import RecentPosts from '../components/recentPosts';

import Twitter from '../images/SVG/TwitterSVG';
import Instagram from '../images/SVG/InstagramSVG';
import Linkedin from '../images/SVG/LinkedinSVG';
import Resume from '../images/SVG/ResumeSVG';

import bgImage1 from '../images/covid19.png';
import bgImage2 from '../images/techno.png';
import bgImage3 from '../images/margins.png';

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min.js'

const indexPage = () => {
    return (
       
<IndexPageWrapper>
<div class="container">
  <div class="jumbotron">
                <div class="centered">
                    <div className="indexIntro">

          <div className="headline">
            <h1>I'm Hannah May Baldwin,</h1>
            <h2>a freelance Journalist.</h2>
            </div>
          
          <ul className="introSocialLinks">
            <li>
              <a
                id='icon'
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
              id='icon'
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
              id='icon'
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
              id='icon'
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
                  </div>
                </div>
              </div>
         
            <Layout>
        
               <Head title="Home"/>

        <div id="portfolioOfWork">
          <h1>Portfolio of Work</h1>
          <p>Past | Present | Future</p>

          <div class="row"> 
            <div class="column"> 
            <div>
              <Link to="/"><img src={bgImage1} alt="Card image"/></Link>
                </div>   
            </div>

          <div class="column">          
            <div>
              <Link to="/portfolio/techno"><img src={bgImage2} alt="Card image"/></Link>
              </div>
          </div>

          <div class="column">          
            <div>
              <Link to="/portfolio/margins"><img src={bgImage3} alt="Card image"/></Link>
              </div>
          </div>
            </div>

        </div>

        <blockquote id="quote" class="blockquote text-right">
          <p class="mb-0">“Life isn't about finding yourself - or about finding anything.<br/>Life is about creating yourself.”</p>
            <footer class="blockquote-footer">Bob Dylan</footer>
      </blockquote>

        <div id="posts">
          <h1>All Recent Posts</h1>
          <RecentPosts/>
        </div>

        </Layout>
        </IndexPageWrapper>
    )
}

export default indexPage;




