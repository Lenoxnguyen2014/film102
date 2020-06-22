import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Image from "../components/image"
import SEO from "../components/seo"

function DevProject({data}){
    return(
        <Layout>
            <SEO title="Developing Project" />
            <div className="columns">
              <div className="column">
            <h1 className="title is-2">Developing Project </h1>
            </div>
            {data.allWordpressWpDevelopingprojects.edges.map(({node}) => (
                <div key = {node.slug} className="column">
                <Link to = {node.slug}>
                    <p>{node.title}</p>
                    <Img  key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
                </Link>
                <p>{node.status}</p>
                </div>

            ))}
            </div>
            
        </Layout>
    )
}

export const pageQuery = graphql`
query developingPosts{
    allWordpressWpDevelopingprojects {
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
                    resolutions(width:500, height:500){
                        ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                    }
                }
              }
            }
            title
            slug
            status
          }
        }
      }
}
`

export default DevProject