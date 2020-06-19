import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import Img from "gatsby-image"


function Page({ data }) {
    const page = data.allWordpressPage.edges[0].node
    return(
        <Layout>
          <h1>{page.title}</h1>
          <p>{page.date}</p>
          <Img  fixed={page.featured_media.localFile.childImageSharp.fixed} />
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Layout>
    )
}

export default Page

export const query = graphql`
  query($id: Int!){
      allWordpressPage(filter: { wordpress_id: { eq: $id } }) {
        edges {
            node {
              title
              date( formatString: "YYYY-MM-DD" )
              content
              slug
              wordpress_id
              featured_media {
                localFile {
                  childImageSharp {
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