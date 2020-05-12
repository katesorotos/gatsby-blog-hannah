import React from "react";
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const indexPage = () => {
    return (
        <div>
            <Header/>
            <h1>Hannah Blog</h1>
            <h2>This is my blog</h2>
            <p><Link to='/contact'>Get in touch?</Link></p>
            <Footer/>
        </div>
    )
}

export default indexPage;