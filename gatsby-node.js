/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
const createPaginatedPages = require('gatsby-paginate')

// create page template for page
// create page template for each post
// create page template for each post project( production, developing, and completion)
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allWordpressPage {
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }
        allWordpressPost(limit:2 , sort: { fields: [date] }) {
          edges {
            node {
              title
              excerpt
              content
              slug
            }
          }
        }
      allWordpressWpCompletionprojects(limit:2,sort: { fields: [date] }) {
        edges {
          node {
                title
                content
                slug   
                date  
          }
        }
      }
      allWordpressWpDevelopingprojects(limit:2,sort: { fields: [date] })  {
        edges {
          node {
            slug
            title
            content
            date
          }
        }
      }
      allWordpressWpProductionprojects(limit:2, sort: { fields: [date] })  {
        edges {
          node {
            slug
            title
            content
            date
          }
        }
      }
    }
    `).then(
      result => {
      
      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: '/films/' + node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // This is the $slug variable
            // passed to blog-post.js
            slug: node.slug,
          },
        })
      }),  
      result.data.allWordpressPage.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            // This is the $slug variable
            // passed to page.js
            id: node.wordpress_id,

          },
        })
      }),
      result.data.allWordpressWpCompletionprojects.edges.forEach(({ node }) => {
        createPage({
          path: `projects/` + node.slug,
          component: path.resolve(`./src/templates/complete-post.js`),
          context: {
            // This is the $slug variable
            // passed to page.js
            slug: node.slug,
          },
        })
      }),
      result.data.allWordpressWpDevelopingprojects.edges.forEach(({ node }) => {
        createPage({
          path: `projects/` + node.slug,
          component: path.resolve(`./src/templates/dev-post.js`),
          context: {
            // This is the $slug variable
            // passed to page.js
            slug: node.slug,
          },
        })
      }),
      result.data.allWordpressWpProductionprojects.edges.forEach(({ node }) => {
        createPage({
          path: `projects/` + node.slug,
          component: path.resolve(`./src/templates/production-post.js`),
          context: {
            // This is the $slug variable
            // passed to page.js
            slug: node.slug,
          },
        })
      })
    })
}
    