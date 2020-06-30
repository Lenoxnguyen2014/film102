import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Search from "./search"


export const quickSearch ={
  position: "fixed",
  top: "0",
  left: "0"
}
function Projects({data}){
    return(
        <Layout>
        <div className="container">
          <a href="/search" className="title is-3" style={{  position: "fixed", top: "4em", right: "0"}}>Search</a>
            <div id='completeProject' className="columns">
              <div className="column">
               <h1 className="title is-2">Complete Project</h1>
               </div>
               {data.allWordpressWpCompletionprojects.edges.map(({ node }) => (
      <div key={node.slug} className="column">
      <Link to={node.slug}>
        <h4 className="title is-4 level-item">{node.title}</h4>
        <Img key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
        </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
           <a href='/complete-project' className="level-left">Read more</a>
       
         </div>
         <div id='productionProject' className="columns">
         <div className="column">
               <h1 className="title is-2">Production project</h1>
               </div>
               {data.allWordpressWpProductionprojects.edges.map(({ node }) => (
      <div key={node.slug} className="column">
      <Link to={ node.slug}>
        <h4 className="title is-4 level-item">{node.title}</h4>
        <Img  key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
        </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
          
        ))}
         <a href='/production-project' className="level-left">Read more</a>
        </div>
         <div id='developingProject' className="columns">
                <div className="column">
               <h1 className="title is-2">Developing project</h1>
               </div>
               {data.allWordpressWpDevelopingprojects.edges.map(({ node }) => (
      <div key={node.slug} className="column">
      <Link to={ node.slug}>
        <h4 className="title is-4 level-item">{node.title}</h4>
        <Img  key={node.featured_media.localFile.childImageSharp.resolutions.src} fluid={node.featured_media.localFile.childImageSharp.fluid}/>
        </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
           <a href='/developing-project' className="level-left">Read more</a>
        </div>
         </div>
        
        </Layout>
    )
}

export const pageQuery = graphql `
query ProjectsPost{
    allWordpressWpCompletionprojects(limit:2, sort: { fields: [date] }) {
        edges {
          node {
                title
                slug   
                date
                featured_media {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth:350, quality:100){
                          ...GatsbyImageSharpFluid
                          ...GatsbyImageSharpFluidLimitPresentationSize
          
                        }
                        resolutions(width:350, height: 500) {
                          ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                        }
                      }
                    }
                  }
          }
        }
      }
      allWordpressWpDevelopingprojects(limit:2, sort: { fields: [date] })  {
        edges {
          node {
            slug
            title
            date
            featured_media {
                localFile {
                  childImageSharp {
                      fluid(maxWidth:350, quality:100){
                          ...GatsbyImageSharpFluid
                          ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                      resolutions(width:350, height:500){
                          ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                      }
                  }
                }
              }
          }
        }
      }
      allWordpressWpProductionprojects(limit:2 ,sort: { fields: [date] })  {
        edges {
          node {
            slug
            title
            featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 350, quality:100){
                      ...GatsbyImageSharpFluid
                      ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                    resolutions(width:350, height: 500){
                      ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                    }
                  }
                }
              }
          }
        }
      }
}`


export default Projects