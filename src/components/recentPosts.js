import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from '../pages/blog.module.scss';
import styled from 'styled-components';

const Post = styled.div`
display: flex;
`

const RecentPosts = () => {

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
    )
}  

export default RecentPosts; 

