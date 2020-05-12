import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const aboutPage = () => {
    return (
        <div> 
            <Header/>
            <h1>About</h1>
            <p>Hi im Hannah</p>
            <p><Link to='/contact'>Get in touch?</Link></p>
            <Footer/>
        </div>
    )
}

export default aboutPage;