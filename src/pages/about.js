import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const aboutPage = () => {
    return (
        <div> 
            <Layout>
            <h1>About</h1>
            <p>Hi im Hannah</p>
            <p><Link to='/contact'>Get in touch?</Link></p>
            </Layout>
        </div>
    )
}

export default aboutPage;