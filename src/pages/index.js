import React from "react";
import { Link } from 'gatsby';

const indexPage = () => {
    return (
        <div>
            <h1>Hannah Blog</h1>
            <h2>This is my blog</h2>
            <p><Link to='/contact'>Get in touch?</Link></p>
        </div>
    )
}

export default indexPage;