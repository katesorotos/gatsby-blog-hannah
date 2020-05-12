import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';

const indexPage = () => {
    return (
        <Layout>
            <h1>Hannah Blog</h1>
            <h2>This is my blog</h2>
            <p><Link to='/contact'>Get in touch?</Link></p>
        </Layout>
    )
}

export default indexPage;