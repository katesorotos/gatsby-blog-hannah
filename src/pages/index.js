import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const indexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hannah Blog</h1>
            <h2>This is my blog</h2>
            <p><Link to='/contact'>Get in touch?</Link></p>
        </Layout>
    )
}

export default indexPage;