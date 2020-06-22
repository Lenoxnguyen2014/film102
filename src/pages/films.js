import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Image from "../components/image"
import SEO from "../components/seo"

function Films({data}) {
    return(
    <Layout>
      <h2 className="title is-2 level-item">Official Films</h2>
      <div className="container">
      <SEO title="films" />
      <div className="columns">
      {data.allWordpressPost.edges.map(({ node }) => (
      <div key={node.slug}>
      <Link to={node.slug}>
        <div className="column">
        <p className="title is-4 level-item">{node.title}</p>
        </div>
        <div className="column">
        <Img  key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
        </div>
        </Link>
          <div className="column">
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          </div>
        ))}
        </div>
        </div>
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
  export default Films
  