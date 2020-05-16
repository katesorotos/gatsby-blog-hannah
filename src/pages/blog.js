import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
import styled from 'styled-components';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
import Head from '../components/head';
import BlogPageWrapper from '../styles/blog/blogPageSyles';
import BlogAuthor from '../components/blog/blogAuthor';

/* const Post = styled.div`
    display: flex;
`
const PostImage = styled.div`
    flex: 25%;
    margin-right: 1rem;
`
const PostText = styled.div`
    flex: 75%;
`

class BlogIndex extends React.Component {
    render () {
        const { data } = this.props
        const posts = data.allContentfulPost.edges
        return (
            <div> 
            <Layout>
            <Head title="Blog"/> 
            <BlogPageWrapper>
            <h1>Blog</h1>

             <BlogAuthor/> 

            <ol className={blogStyles.posts}>
            {posts.map(({ node }) => {
                const title = node.title || node.slug
                    return (
                        <Post key={node.slug} > 
                        {/* <PostImage>
                            <Img fluid={node.image.fluid}/>
                        </PostImage> */
/*                         <PostText>
                            <Link to={node.slug}>
                                <h2>{title}</h2>
                                <p>{node.owner}</p>
                                <p>{node.publishedDate}</p> 
                            </Link>
                        </PostText>
                        </Post>
                    )   
                }
            )}
            </ol>
            </BlogPageWrapper>
            </Layout>
            </div>
        )
    }
}
            

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                }
            }
            allContentfulPost {
                edges {
                    node {
                        title
                        author 
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `  */

const Post = styled.div`
display: flex;
`
const PostImage = styled.div`
flex: 25%;
/* margin-right: 1rem; */
`
const PostText = styled.div`
flex: 75%;
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
            <ol className={blogStyles.posts}>
                {data.allContentfulPost.edges.map((edge) => {
                        return (
                            <Post key={edge.node.slug} > 
                            <li className={blogStyles.post}> 
                                <Link to={edge.node.slug}>
                                <PostImage>
                                <img 
                                src={edge.node.image.resize.src} alt={edge.node.image.title}/>
                                </PostImage>
                                <PostText>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                                <p>{edge.node.author}</p>
                                </PostText>
                                </Link>
                            </li>
                            </Post>
                        )
                    })   
                }
            </ol>
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