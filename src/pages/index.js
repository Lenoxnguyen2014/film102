import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage({data}) {
  //add feature images
  // const imagesResolutions = data.allWordpressPost.edges.map(
  //   edge=>
  //   edge.node.featured_media.localFile.childImageSharp.resolutions
  // )
  
  return(
  <Layout>
    <SEO title="Home" />
    <h1>Film company</h1>
    <h4>Posts</h4>
    {data.allWordpressPost.edges.map(({ node }) => (
    <div key={node.slug}>
    <Link to={node.slug}>
      <p>{node.title}</p>
      <Img  key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
      </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
  </Layout>
  )
  }

export const pageQuery = graphql`
query Posts {
  allWordpressPost {
    edges {
      node {
        date( formatString: "YYYY-MM-DD" )
        featured_media  {
            localFile{
                childImageSharp {
                  fluid(maxWidth: 500, quality:100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                  resolutions(width: 500, height: 500) {
                    ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                  }
                        fixed {
            ...GatsbyImageSharpFixed
                  }
                } 
            }
        }
        title
        excerpt
        slug
      }
    }
  }
}
`
export default IndexPage
