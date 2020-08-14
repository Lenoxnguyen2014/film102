import React,{useState} from "react"
import "./mystyle.scss"
import Layout from "../components/layout"
import Header from "../components/header"
import {graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import develop from "../images/develop.jpg"
import complete from "../images/complete.jpeg"
import production from "../images/production.jpeg"
import Link from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Video from "../components/video";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

// import TransitionLink from 'gatsby-plugin-transition-link'



function IndexPage({data}) {

  const page_finance = data.allWordpressPage.edges[0].node
  const page_services = data.allWordpressPage.edges[1].node
  const page_about = data.allWordpressPage.edges[2].node

  // call out posts page for film
  const recent_film = data.allWordpressPost.edges[0].node

  // call out partners ( previous 4 partners)
  const partner_1 = data.allWordpressWpPartners.edges[0].node
  const partner_2 = data.allWordpressWpPartners.edges[1].node
  const partner_3 = data.allWordpressWpPartners.edges[2].node
  const partner_4 = data.allWordpressWpPartners.edges[3].node

  // call out staff (p previous 3 staff)
  const staff_1 = data.allWordpressWpStaff.edges[0].node
  const staff_2 = data.allWordpressWpStaff.edges[1].node
  const staff_3 = data.allWordpressWpStaff.edges[2].node


  
  return (
    <>
    <div className="card" >
    <figure className="image is-16by9">
    <Video  videoSrcURL="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"/>
    </figure>
  <div class="card-content is-overlay level-item ">
    <p class="title is-1 has-background-success-light">
      Film company
    </p>
  </div>
  <br/>
    </div>
    <Layout className="is-overlay">
    <div className="container">
      <div className="columns">
        <div className="column">
          <AniLink fade to={page_about.slug}>
          <Img  key={page_about.featured_media.localFile.childImageSharp.resolutions.src} fluid={page_about.featured_media.localFile.childImageSharp.fluid}
          />       
          </AniLink>         
          </div>
          <div className="column">
          <AniLink fade to={page_about.slug}>
            <h3 className="title is-2 level-item">{page_about.title}</h3>
          <div className="level-item">
            {page_about.excerpt} 
          Read more</div>
          </AniLink>         
          </div>
      </div>
      <h2 className="title is-2 level-item">Previous Projects</h2>
      <div className="columns">
      <div className="column">
      <AniLink paintDrip to={'/complete-project'} duration={1} >
        <h3 className="title is-4 level-item">Complete Projects</h3>
      <img src={complete} alt="complete"/>
      </AniLink>
      
      </div>
            <div className = "column">
              <AniLink swipe direction="up" to ={'/developing-project'}>
              <h3 className="title is-4 level-item is-hovered">Developing Projects</h3>
            <img src={develop} alt="develop"/>
            </AniLink>
            </div>
            <div className= "column">
              <AniLink swipe top="exit" to={'/production-project'}>
              <h3 className="title is-4 level-item">Production Projects</h3>
            <img src={production} alt="production"/>
            </AniLink>
            </div>
      </div>
      <h2 className="title is-2 level-item">Our partners</h2>
      <div className="columns ">
          <div className="column">            
          <Img  key={partner_1.featured_media.localFile.childImageSharp.resolutions.src} fluid={partner_1.featured_media.localFile.childImageSharp.fluid}  objectFit="contain"
          objectPosition="50% 50%"
          alt=""/>
            </div>
            <div className="column">            
            <Img  key={partner_2.featured_media.localFile.childImageSharp.resolutions.src} fluid={partner_2.featured_media.localFile.childImageSharp.fluid}  objectFit="contain"
          objectPosition="50% 50%"
          alt=""/>
            </div>
        <div className="column">            
            <Img  key={partner_3.featured_media.localFile.childImageSharp.resolutions.src} fluid={partner_3.featured_media.localFile.childImageSharp.fluid}  objectFit="contain"
          objectPosition="50% 50%"
          alt=""/>
            </div>
            <div class="column">            
            <Img  key={partner_4.featured_media.localFile.childImageSharp.resolutions.src} fluid={partner_4.featured_media.localFile.childImageSharp.fluid}  objectFit="contain"
          objectPosition="50% 50%"
          alt=""/>
            </div>
        </div>
      <div className="columns">
        <div className="column">
  <h2 className="title is-2 level-item">{page_services.title}</h2>
  <AniLink swipe top="entry"  to={page_services.slug}>

  <Img  key={page_services.featured_media.localFile.childImageSharp.resolutions.src} fluid={page_services.featured_media.localFile.childImageSharp.fluid}/> 
  {page_services.excerpt}
  </AniLink>
  
        </div>
        <div className="column is-one-two">
          <h2 className="title is-2 level-item">Films</h2>
          <AniLink swipe top="entry"  to={'/films/'+ recent_film.slug}>
          <Img  key={recent_film.featured_media.localFile.childImageSharp.resolutions.src} fluid={recent_film.featured_media.localFile.childImageSharp.fluid}/>
          </AniLink>
        </div>
      </div>

      <h2 className="title is-2 level-item">Staff</h2>
      <div className="columns">
      <div className="column">            
          <Img  key={staff_1.featured_media.localFile.childImageSharp.resolutions.src} fluid={staff_1.featured_media.localFile.childImageSharp.fluid} />
            </div>
            <div className="column">            
            <Img key={staff_2.featured_media.localFile.childImageSharp.resolutions.src} fluid={staff_2.featured_media.localFile.childImageSharp.fluid} />
            </div>
        <div className="column">            
            <Img  key={staff_3.featured_media.localFile.childImageSharp.resolutions.src} fluid={staff_3.featured_media.localFile.childImageSharp.fluid} />
            </div>
      </div>

      <h2 className="title is-2 level-item">Contact us</h2>
      <div className="field">
    <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Text input"/>
  </div>
</div>
<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="email" placeholder="Email input" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
  </div>
</div>
<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea" placeholder="Textarea"></textarea>
  </div>
</div>
<div className="field is-grouped">
  <div className="control">
    <button className="button is-link">Submit</button>
  </div>
  <div className="control">
    <button classNAme="button is-link is-light">Cancel</button>
  </div>
  </div>

    </div>
    </div>
    </Layout>
    </>
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
                ...GatsbyImageSharpFluid_withWebp_tracedSVG                ...GatsbyImageSharpFluidLimitPresentationSize
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
  allWordpressWpPartners (limit:4) {
    edges {
      node {
        title
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, quality:100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
              resolutions(width: 500, height: 500) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              }
              fixed(width: 250, height: 250) {
                ...GatsbyImageSharpFixed
                      }
            }
          }
        }
      }
    }
  }
  allWordpressWpStaff (limit:3) {
    edges {
      node {
        id
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, quality:100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
              resolutions(width: 500, height: 500) {
                ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              }
              fixed(width: 250, height: 250) {
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

export default IndexPage