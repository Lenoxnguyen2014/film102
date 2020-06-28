import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
// This production-post is project post that is in production ( any movies with links)

export default function ProductionPost({ data }) {
  const post = data.allWordpressWpProductionprojects.edges[0].node
  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column">
        <h1 className="title is-2 level-item" >{post.title}</h1>
        <Img  fixed={post.featured_media.localFile.childImageSharp.fixed} />
        </div>
        <div className="column">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <p className="level-right">{post.date}</p>
        </div>
        </div>

      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWordpressWpProductionprojects(filter: { slug: { eq: $slug } }) {
      edges {
        node {
           date( formatString: "YYYY-MM-DD" )
          title
          content
          featured_media {
            localFile {
              childImageSharp{
                fixed {
                    ...GatsbyImageSharpFixed
                          }
              }
            }
          }
        }
      }
    }
  }
`