import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const aboutPage = () => {
    return (
        <div> 
            <Layout>
                <Head title="About"/>
            <h1>About</h1>
            <p>Hi im Hannah</p>
            <p><Link to='/contact'>Get in touch?</Link></p>
            </Layout>
        </div>
    )
}

export default aboutPage;