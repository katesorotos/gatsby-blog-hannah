import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
import Head from '../components/head';
import BlogPageWrapper from '../styles/blog/blogPageSyles'; 

const Post = styled.div`
display: flex;
`

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulPost ( 
            sort: {
                fields: publishedDate,
                order: DESC }) {
                    edges {
                        node {
                            title
                            author
                            slug
                            publishedDate(formatString: "MMMM Do, YYYY")
                            image {
                                title
                                fluid {
                                    src
                                }
                                resize(width: 1000, height: 500) {
                                    src
                                }
                            }
                            }
                        }
                    }
                }
            
        `)

     return (
        <div> 
            <Layout>
                <BlogPageWrapper>
                <Head title="Blog"/>
            <h1>Blog Posts</h1>
            <div> 
            <ol className={blogStyles.posts}>
                {data.allContentfulPost.edges.map((edge) => {
                        return (
                            <Post key={edge.node.slug}> 
                            <div className={blogStyles.row}>
                            <li className={blogStyles.post}> 
                                <Link to={edge.node.slug}>
                                <div class="col-md-7">
                                    <img src={edge.node.image.resize.src} alt={edge.node.image.title} style={{float: 'left'}}/>
                                </div>

                                <div class="col-md-5" style={{float: 'left'}}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.author}</p>
                                    <p>{edge.node.publishedDate}</p>
                                    <button class="button">Read More → </button>
                                </div>
                                </Link>
                            </li>
                            </div>
                            </Post>
                        )
                    })   
                }
            </ol>
        </div>
            </BlogPageWrapper>
            </Layout>
        </div>
    )
}  

export default BlogPage; 

/* MARKDOWN 

const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                node {
                    frontmatter {
                        title
                        date
                        }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`)

return (
    <div> 
        <Layout>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
            {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}> 
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })   
            }
        </ol>
        </Layout>
    </div>
)
} */