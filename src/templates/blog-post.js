import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"


export default function BlogPost({ data }) {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <Img  fixed={post.featured_media.localFile.childImageSharp.fixed} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
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