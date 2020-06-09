import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';
import BlogPostPageWrapper from '../styles/blog/blogPostStyles';
import Bio from '../components/bio';
import PrevNext from '../components/prevnext';
import Share from '../components/share';


 export const query = graphql`
    query ContentfulBlogPostBySlug ($slug: String!) {
        site {
            siteMetadata {
                title
                owner
                url 
                twitterHandle
                domain: url
            }
        }
        contentfulPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
        allContentfulPost (sort: {order: DESC, fields: publishedDate}) {
            edges {
                node {
                    title
                    publishedDate
                    slug
                }
                next {
                    slug
                    title
                }
                previous {
                    slug
                    title
                }
            }
        }
    }
`


class BlogPostContentfulTemplate extends React.Component {


    render() {
        const post = this.props.data.contentfulPost
        const siteTitle = this.props.data.site.siteMetadata.title
        const { previous, next } = this.props.pageContext; 
    
    const options = {
         renderNode: { 
             "embedded-asset-block": (node) => {
                 const alt = node.data.target.fields.title['en-US']
                 const url = node.data.target.fields.file['en-US'].url
                return <img class= "postImages" alt={alt} src={url} /> 
             }
         }
     }

     return (
        <Layout>
            <Head title={siteTitle}/>
                <BlogPostPageWrapper>
                    <h1>{post.title}</h1>
                    <p>Published: {post.publishedDate}</p>
                    <Bio/>
                     {documentToReactComponents(post.body.json, options)}
                     <PrevNext previous={previous && previous.node} next={next && next.node} />
                     {/* <Share/> */}
                </BlogPostPageWrapper>
        </Layout>
        )
    }
 }

 export default BlogPostContentfulTemplate;




/* MARKDOWN

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`
const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html :props.data.markdownRemark.html}}></div>
        </Layout>
    )
}
 */
