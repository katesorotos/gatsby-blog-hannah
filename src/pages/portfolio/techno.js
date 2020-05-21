import React from 'react';

import Layout from '../../components/layout';
import Head from '../../components/head';
import PageWrapper  from '../../styles/pageWrapper';
import Image from '../../images/techno.png'

const portfolioPage = () => {
    return (
        <div> 
            <Layout>
                <Head title="Techno"/>
                <PageWrapper>
                <div class="row techno">
                        <div class="col-md-6">
                    
                    <img src={Image} alt='Techno is not for everyone' style={{float: 'left'}}/>
                    </div>

                    <div class="col-md-6 excerpt">
                    <h2>TECHNO IS NOT FOR EVERYONE</h2>
                    <h3>JANUARY 2020</h3>
                    <p>Techno is not for everyone seemed an appropriate title for a project designed to 
                        uncover the diversity seen in Berlin. All of the contributors share their unique 
                        experiences of life as a Berliner, in a city that doesn't sleep, and one which 
                        cultivates new identities each day. This experimental magazine is a travel guide 
                        with a twist, aiming for both an eclectic read and a broad, rounded report on the city..</p>
                        <a href="https://indd.adobe.com/view/71170af6-3420-40e8-baad-f13d27fe0b3c" target="_blank"><strong>READ HERE</strong></a>
                </div>
                    </div>
            </PageWrapper>
            </Layout>
        </div>
    )
}

export default portfolioPage;