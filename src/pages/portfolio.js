import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import PageWrapper  from '../styles/pageWrapper';

const portfolioPage = () => {
    return (
        <div> 
            <Layout>
                <Head title="Portfolio"/>
                <PageWrapper>
            <h1>My Portfolio</h1>
            </PageWrapper>
            </Layout>
        </div>
    )
}

export default portfolioPage;