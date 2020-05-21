import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout';
import Head from '../components/head';
import PageWrapper  from '../styles/pageWrapper';
import ProfileImage from '../images/hannah1.png';
import ProfileImage2 from '../images/hannah2.png';


const AboutPage = (props) => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                node {
                    frontmatter {
                        miniBio
                        }
                    html
                }
            }
        }
    }
`)

console.log(data)

   return (
            <Layout>
                <Head title="About"/>
                <PageWrapper>
                <h1>About Me</h1>
                    <div class="row bio">
                        <div class="col-md-5">
                    
                    <img src={ProfileImage} alt='Hannah May Baldwin' style={{float: 'left'}}/>
                    </div>

                    <div class="col-md-7">
                    <h2>Hi, I'm Hannah</h2>

                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <div>
                                <h3>{edge.node.frontmatter.miniBio}</h3>
                                <p dangerouslySetInnerHTML={{ __html: edge.node.html}}></p>
                           </div>
                    )
                })}
                </div>
                    </div>
                </PageWrapper>
            </Layout>

    )


} 

export default AboutPage;

