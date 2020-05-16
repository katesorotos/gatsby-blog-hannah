import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout';
import Head from '../components/head';
import PageWrapper  from '../styles/pageWrapper';

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
                    <p>Hi im Hannah</p>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <div>
                                <p>{edge.node.frontmatter.miniBio}</p>
                                <div dangerouslySetInnerHTML={{ __html: edge.node.html}}></div>
                           </div>
                    )
                })}
                    <p><Link to='/contact'>Get in touch?</Link></p>
                </PageWrapper>
            </Layout>

    )


} 

export default AboutPage;

