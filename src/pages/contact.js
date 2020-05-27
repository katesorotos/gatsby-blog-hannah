import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import ContactWrapper  from '../styles/contactStyles';
import ContactForm from '../components/contactForm';

const contactPage = () => {
    return (
        <div> 
            <Layout>
                <Head title="Contact"/>
                <ContactWrapper>
                <h1>Contact</h1>
                    <ContactForm/>
                </ContactWrapper>
            </Layout>
        </div>
    )
}

export default contactPage;