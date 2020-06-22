import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
// This developing-post is project post that is developing ( any movies with links)

export default function DevPost({ data }) {
  const post = data.allWordpressWpDevelopingprojects.edges[0].node
  return (
    <Layout>
      <div class="container">
        <div class="columns">
          <div class="column">
        <h1 className="title is-2 level-item">{post.title}</h1>
        <Img  fixed={post.featured_media.localFile.childImageSharp.fixed} />
        </div>
        <div class="column">
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
    allWordpressWpDevelopingprojects(filter: { slug: { eq: $slug } }) {
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