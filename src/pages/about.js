import React from 'react';
import { Link } from 'gatsby';

const aboutPage = () => {
    return (
        <div> 
            <h1>About</h1>
            <p>Hi im Hannah</p>
            <p><Link to='/contact'>Get in touch?</Link></p>
        </div>
    )
}

export default aboutPage;