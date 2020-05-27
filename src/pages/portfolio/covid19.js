import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import Head from '../../components/head';
import PageWrapper  from '../../styles/pageWrapper';
import Image from '../../images/covid19.png';

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
                    <h2>COVID 19 - THE GOOD, THE BAD, THE UGLY</h2>
                    <h3>COMING SOON</h3>
                    <p></p>
                        <a href="/" target="_blank"><strong>READ HERE</strong></a>
                </div>
                    </div>
            </PageWrapper>
            </Layout>
        </div>
    )
}

export default portfolioPage;





