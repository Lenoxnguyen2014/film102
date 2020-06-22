import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Image from "../components/image"
import SEO from "../components/seo"

function ProductionProject({data}){
    return(
        <Layout>
            <SEO title="Production Project" />
            <div className="columns">
              <div className="column">
            <h1 className="title is-2">Production Project </h1>
            </div>
            
            {data.allWordpressWpProductionprojects.edges.map(({node}) => (
                <div key = {node.slug} className="column">
                <Link to = {node.slug}>
                    <p className="title is-4">{node.title}</p>
                    <Img  key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
                </Link>
                </div>
            ))}
            </div>
        </Layout>
    )
}

export const pageQuery = graphql
`
query productionPosts {
    allWordpressWpProductionprojects {
        edges {
          node {
            title
            slug
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500, quality:100){
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                  resolutions(width:500, height: 500){
                    ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
}
` 


export default ProductionProject