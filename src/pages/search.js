import React from "react"
import {Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ProjectsPreview from "../components/projects-preview"

import Img from "gatsby-image"
import SEO from "../components/seo"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, HitsPerPage } from 'react-instantsearch-dom';
const searchClient = algoliasearch('RP46N00CZ1', '0ad39c49675be34bae7819a24a63b795');
const size={
  width: "70vw"
}

function Search(){
    return(
      <Layout>
        <div className="container ">
          <div className="columns">
          <div className="column">
          <br/>
            <InstantSearch searchClient={searchClient} indexName="dev_post">
          <SearchBox style={{size}}/>
          <Hits hitComponent={ProjectsPreview} />
        </InstantSearch>
        </div>
        </div> 

            </div>
            </Layout>
            
    )
}

export const pageQuery = graphql `
query Projects{
    allWordpressWpCompletionprojects(limit:2, sort: { fields: [date] }) {
        edges {
          node {
                title
                slug   
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
}`


export default Search