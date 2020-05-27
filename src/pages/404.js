import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import PageWrapper  from '../styles/pageWrapper';

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <PageWrapper>
                <div class="error">
            <h1>404</h1> 
            <h2>PAGE NOT FOUND</h2>
            <Link to='/'><p><strong>HOME</strong></p></Link>
                </div>
            </PageWrapper>
        </Layout>
    ) 
}

export default NotFound;