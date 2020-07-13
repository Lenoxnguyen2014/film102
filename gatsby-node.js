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
const { node } = require('prop-types')

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
        allWordpressPost(
          sort: { fields: [date] }
          limit: 1000
          ) {
          edges {
            node {
              title
              excerpt
              content
              slug
            }
          }
        }
      allWordpressWpCompletionprojects(sort: { fields: [date] }) {
        edges {
          node {
                title
                content
                slug   
                date  
          }
        }
      }
      allWordpressWpDevelopingprojects(sort: { fields: [date] })  {
        edges {
          node {
            slug
            title
            content
            date
          }
        }
      }
      allWordpressWpProductionprojects(sort: { fields: [date] })  {
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
      //render list of post films for pagination
      result => {
      const films = result.data.allWordpressPost.edges
      const filmsPerPage = 3
      const numPages = Math.ceil(films.length / filmsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/films` : `/films/${i + 1}`,
          component: path.resolve(`./src/templates/films.js`),
          context: {
            limit: filmsPerPage,
            skip: i * filmsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      }),
      // render each post films
      Array.from({ length: numPages }).forEach((_, i) => {
      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `films/` + node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // This is the $slug variable
            // passed to blog-post.js
            slug: node.slug,
          },
        })
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
          path: `/projects/` + node.slug,
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
          path: `/projects/` + node.slug,
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
          path: `/projects/` + node.slug,
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
    