import React from "react"
import "./mystyle.scss"
import Layout from "../components/layout"
import {Link, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import develop from "../images/develop.jpg"
import complete from "../images/complete.jpeg"
import production from "../images/production.jpeg"

function IndexPage({data}) {

  console.log(develop)
  // call out the pages
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
    <Layout>
    <div className="container">
    <h2 className="title is-2 level-item">{page_about.title}</h2>
      <div className="columns">
        <div className="column">
          <Link to={page_about.slug}>
          <Img  key={page_about.featured_media.localFile.childImageSharp.resolutions.src} fluid={page_about.featured_media.localFile.childImageSharp.fluid}
          />       
          </Link>         
          </div>
          <div className="column">
          <Link to={page_about.slug}>
          <div className="level-item">
            {page_about.excerpt} 
          Read more</div>
          </Link>         
          </div>
      </div>
      <h2 className="title is-2 level-item">Previous Projects</h2>
      <div className="columns">
      <div className="column">
      <Link to={'/complete-project'}>
        <h3 className="title is-4 level-item">Complete Projects</h3>
      <img src={complete} alt="complete"/>
      </Link>
      
      </div>
            <div className = "column">
              <Link to ={'/developing-project'}>
              <h3 className="title is-4 level-item is-hovered">Developing Projects</h3>
            <img src={develop} alt="develop"/>
            </Link>
            </div>
            <div className= "column">
              <Link to={'/production-project'}>
              <h3 className="title is-4 level-item">Production Projects</h3>
            <img src={production} alt="production"/>
            </Link>
            </div>
      </div>
      <h2 className="title is-2 level-item">Our partners</h2>
      <div className="columns ">
          <div class="column">            
          <Img  key={partner_1.featured_media.localFile.childImageSharp.resolutions.src} fluid={partner_1.featured_media.localFile.childImageSharp.fluid}  objectFit="contain"
          objectPosition="50% 50%"
          alt=""/>
            </div>
            <div class="column">            
            <Img  key={partner_2.featured_media.localFile.childImageSharp.resolutions.src} fluid={partner_2.featured_media.localFile.childImageSharp.fluid}  objectFit="contain"
          objectPosition="50% 50%"
          alt=""/>
            </div>
        <div class="column">            
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
  <Link to={page_services.slug}>

  <Img  key={page_services.featured_media.localFile.childImageSharp.resolutions.src} fluid={page_services.featured_media.localFile.childImageSharp.fluid}/> 
  {page_services.excerpt}
  </Link>
  
        </div>
        <div className="column is-one-two">
          <h2 className="title is-2 level-item">Films</h2>
          <Link to={'/films/'+ recent_film.slug}>
          <Img  key={recent_film.featured_media.localFile.childImageSharp.resolutions.src} fluid={recent_film.featured_media.localFile.childImageSharp.fluid}/>
          </Link>
        </div>
      </div>

      <h2 className="title is-2 level-item">Staff</h2>
      <div className="columns">
      <div class="column">            
          <Img class="is-rounded" key={staff_1.featured_media.localFile.childImageSharp.resolutions.src} fluid={staff_1.featured_media.localFile.childImageSharp.fluid} />
            </div>
            <div class="column">            
            <Img class="is-rounded" key={staff_2.featured_media.localFile.childImageSharp.resolutions.src} fluid={staff_2.featured_media.localFile.childImageSharp.fluid} />
            </div>
        <div class="column">            
            <Img class="is-rounded" key={staff_3.featured_media.localFile.childImageSharp.resolutions.src} fluid={staff_3.featured_media.localFile.childImageSharp.fluid} />
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