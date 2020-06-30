import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
// This blog-post is Film post ( any movies with links)

export default function BlogPost({ data }) {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <div className="container">
      <h1 className="title is-2 level-left">{post.title}</h1>

      <div className="columns">
        <div className="column">
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
    allWordpressPost(filter: { slug: { eq: $slug } }) {
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