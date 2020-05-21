import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import Head from '../../components/head';
import PageWrapper  from '../../styles/pageWrapper';
import Image from '../../images/margins.png';

const portfolioPage = () => {
    return (
        <div> 
            <Layout>
                <Head title="Margins"/>
                <PageWrapper>
                <div class="row margins">
                        <div class="col-md-6">
                    
                    <img src={Image} alt='Margins Magazine' style={{float: 'left'}}/>
                    </div>

                    <div class="col-md-6 excerpt">
                    <h2>MARGINS MAGAZINE</h2>
                    <h3>March 2020</h3>
                    <p>The second issue of Margins Magazine aims to explore the legacies of some of the 
                        pioneers that lead to the creative foundations in Manchester. Although history is 
                        what makes us, we are not confined to it, for the very concept contradicts the 
                        precedents they set. This edition glances back at the legacy of Manchester's greatest 
                        artists, whilst showcasing the current works within the city that makes Manchester 
                        the UK's cultural capital.</p>
                        <a href="https://indd.adobe.com/view/6ce650e5-b853-4021-9a2c-96495c127978" target="_blank"><strong>READ HERE</strong></a>
                </div>
                    </div>
            </PageWrapper>
            </Layout>
        </div>
    )
}

export default portfolioPage;





