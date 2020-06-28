import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Image from "../components/image"
import SEO from "../components/seo"

function CompleteProject({data}) {
  return(
  <Layout>
    <SEO title="Complete Project" />
    <div className="container">
      <div className="columns">
        <div className="column">
    <h1 className="title is-2">Complete Project</h1>
      </div>
    {data.allWordpressWpCompletionprojects.edges.map(({ node }) => (
    <div key={'/projects/complete-project/' + node.slug} className="column">
    <Link to={'/projects/complete-project/' + node.slug}>
      <p className="title is-4 level-item">{node.title}</p>
      <Img  key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
      </Link>

        </div>
      ))}
      </div>
      </div>
  </Layout>
  )
    }

export const pageQuery = graphql`
query completePosts{
  allWordpressWpCompletionprojects {
    edges {
      node {
        date
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth:500, quality:100){
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize

              }
              resolutions(width: 500, height: 500) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              }
            }
          }
        }
        title
        slug
        
        link
      }
    }
  }

}`

export default CompleteProject
