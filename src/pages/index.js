import React from "react"
import "./mystyle.scss"
import Layout from "../components/layout"
import {Link, graphql } from "gatsby"
import Img from "gatsby-image"

function IndexPage({data}) {
  const page_finance = data.allWordpressPage.edges[0].node
  const page_staff = data.allWordpressPage.edges[1].node
  const page_services = data.allWordpressPage.edges[2].node
  const page_about = data.allWordpressPage.edges[3].node
  const recent_film = data.allWordpressPost.edges[0].node
  return (
    <Layout>
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="title is-2 level-item">{page_about.title}</h2>
          <Link to={page_about.slug}>

          <Img  key={page_about.featured_media.localFile.childImageSharp.resolutions.src} fluid={page_about.featured_media.localFile.childImageSharp.fluid}/>       
          <p>Read more</p>
          </Link>
          
          </div>
        <div className="column is-one-two">
          <h2 className="rows title is-2 level-item">Our partners</h2>
          <div className="columns">
   


          </div>
        </div>
      </div>
      <h2 className="title is-2 level-item">Previous Projects</h2>
      <div className="columns">
      <div className="column"><h3 className="title is-4">Complete Projects</h3>
      <Img  key={recent_film.featured_media.localFile.childImageSharp.resolutions.src} fluid={recent_film.featured_media.localFile.childImageSharp.fluid}/>
      
      </div>
            <div className = "column"><h3 className="title is-4">Developing Projects</h3>
            <Img  key={recent_film.featured_media.localFile.childImageSharp.resolutions.src} fluid={recent_film.featured_media.localFile.childImageSharp.fluid}/>
            </div>
            <div className= "column"><h3 className="title is-4">Production Projects</h3>
            <Img  key={recent_film.featured_media.localFile.childImageSharp.resolutions.src} fluid={recent_film.featured_media.localFile.childImageSharp.fluid}/>
            </div>
      </div>
      <div className="columns">
        <div className="column">
  <h2 className="title is-2 level-item">{page_services.title}</h2>
  <Link to={page_services.slug}>

  <Img  key={page_services.featured_media.localFile.childImageSharp.resolutions.src} fluid={page_services.featured_media.localFile.childImageSharp.fluid}/> 
  </Link>
  
        </div>
        <div className="column is-one-two">
          <h2 className="title is-2 level-item">Films</h2>
          <Link to={'/films/'+ recent_film.slug}>
          <Img  key={recent_film.featured_media.localFile.childImageSharp.resolutions.src} fluid={recent_film.featured_media.localFile.childImageSharp.fluid}/>
          </Link>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Staff</h2>
          <p className="content">Cool content. Using Bulma!</p>
        </div>
        <div className="column ">
          <h2 className="title is-2">Contact us</h2>
          <p className="content">This column is cool too!</p>
        </div>

      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query Pages{
  allWordpressPage {
    edges {
      node {
        slug
        title
        excerpt
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth:500,quality:100){
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
  allWordpressPost(limit:1) {
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