import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

function Staff({data}){
    return(
        <Layout>
            <div className="container">
            <h1 className="title is-1 level-item">Staff</h1>
                <div className="columns">
                    <div className="column">
                    {data.allWordpressWpStaff.edges.map(({ node }) => (
                        <div className="columns">
                            <div className="column">
                        <Img key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
                            </div>
                            <div className="column">
                            <h2 className="title is-2 level-item">{node.title}</h2>
                            <h4 className="title is-4 level-item">{node.content}</h4>
                            </div>


                        </div>
                 
                    ))}
                    </div>
                  
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query staffPosts{
    allWordpressWpStaff {
        edges {
          node {
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
            content
            title
          }
        }
      }
}`

export default Staff