import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const contactPage = () => {
    return (
        <div> 
            <Layout>
                <Head title="Contact"/>
            <h1>Contact</h1>
            <p>Follow me on instagram - <a href="https://www.instagram.com/kate_sorotos/" target='_blank'>@katesorotos</a></p>
            </Layout>
        </div>
    )
}

export default contactPage;