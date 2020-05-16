import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import PageWrapper  from '../styles/pageWrapper';

const contactPage = () => {
    return (
        <div> 
            <Layout>
                <Head title="Contact"/>
                <PageWrapper>
            <h1>Contact</h1>
            <p>Follow me on instagram - <a href="https://www.instagram.com/kate_sorotos/" target='_blank'>@katesorotos</a></p>
            </PageWrapper>
            </Layout>
        </div>
    )
}

export default contactPage;