import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Image from "../components/image"
import SEO from "../components/seo"
import Pagination from "../components/pagination"

function Films({data,pageContext}) {
    // get this from node js
    console.log({pageContext})
    return(
    <Layout>
      <h2 className="title is-2 level-item">Official Films</h2>
      <div className="container">
      <SEO title="films" />
      <div className="columns">
      {data.allWordpressPost.edges.map(({ node }) => (
      <div key={node.slug}>
      <Link to={"/films/" + node.slug} replace>
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
        <Pagination className="columns" {...pageContext} />
    </Layout>
    )
    }
  
  export const pageQuery = graphql`
  query Posts($skip: Int!, $limit: Int!){
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ){
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
  