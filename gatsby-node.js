const path = require('path')

/* exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPost = path.resolve('./src/templates/blog.js')
    return graphql(`
        {
            allContentfulPost {
                edges {
                    node {
                        slug
                        title
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            throw result.errors
        }

    const posts = result.data.allContentfulPost.edges

    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index-1].node

        createPage({
            path: post.node.slug,
            component: blogPost,
            context: {
                slug: post.node.slug,
                previous,
                next,
                },
            })
        })
    })
} */



module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulPost {
                edges {
                    node {
                        slug
                        title
                    }
                }
            }
        }
    `)

    const posts = res.data.allContentfulPost.edges

    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

    res.data.allContentfulPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: edge.node.slug,
            context: {
                slug: edge.node.slug,
                previous,
                next,
            }
        })
    })
})
}


/* ---- MARKDOWN

 
module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log('@@@@@@@@@@', slug)
        // console.log(JSON.stringify(node, undefined, 4))

        createNodeField({
            node, 
            name: 'slug',
            value: slug
        })
    }
}
 
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `) 

     res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}  */
