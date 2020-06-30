require("dotenv").config(
  {path: `.env.${process.env.NODE_ENV}`}
)

const completeProjectsQuery = `{
  allWordpressWpCompletionprojects {
    edges {
      node {
        id
        type
        title
        content
        slug
        featured_media {
          localFile {
            childImageSharp {
              id
              resolutions {
                src
              }
            }
          }
        }

      }
    }
  }
}`

const productionProjectsQuery = `{
  allWordpressWpProductionprojects {
    edges {
      node {
        id
        type
        content
        title
        slug
        featured_media {
          localFile {
            childImageSharp {
              id
              resolutions {
                src
              }
            }
          }
        }

      }
    }
  }
}`

const developingProjectsQuery = `{
  allWordpressWpDevelopingprojects {
    edges {
      node {
        id
        type
        title
        content
        slug
        featured_media {
          localFile {
            childImageSharp {
              id
              resolutions {
                src
              }
            }
          }
        }
      }
    }
  }
}`
const queries = [
  {
    query: completeProjectsQuery,
    transformer: ({ data }) => data.allWordpressWpCompletionprojects.edges.map(({ node }) => node),
    indexName: 'dev_post'
  },
  {
    query: productionProjectsQuery,
    transformer: ({ data }) => data.allWordpressWpProductionprojects.edges.map(({ node }) => node),
    indexName: 'dev_post'
  },
  {
    query: developingProjectsQuery,
    transformer: ({ data }) => data.allWordpressWpDevelopingprojects.edges.map(({ node }) => node),
    indexName: 'dev_post'
  }
];
module.exports = {
  siteMetadata: {
    title: `Vector Services`,
    description: `An new site for represent filming project.`,
    author: `@lenguyen`,
    
    menuLinks:[
      {
        name: 'about-us',
        Link: '/about-us'
      },{
        name: 'projects',
        Link: '/projects'
      },{
        name: 'films',
        Link: '/films'
      },{
        name: 'finance',
        Link: '/finance'
      },{
        name: 'our-services',
        Link: '/our-services'
      },{
        name: 'staff',
        Link: '/staff'
      },
      {
        name: 'contact-us',
        Link: '/contact-us'
      }
    ]
  },
  plugins: [
    
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
        matchFields: ['slug', 'modified'] 
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: `http://192.168.33.10/film102/`,
        // The protocol. This can be http or https.
        protocol: `http`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: false,
        auth:{},
        verboseOutput: false,
        includedRoutes: [
          "**/posts",
          "**/media",
          "**/categories",
          "**/pages",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/completionprojects",
          "**/developingprojects",
          "**/productionprojects",
          "**/staff",
          "**/partners"
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    /**
     * The following plugins aren't required for gatsby-source-wordpress,
     * but we need them so the default starter we installed above will keep working.
     **/
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    { resolve: 'gatsby-plugin-theme-ui',
      options: {
        prismPreset: 'night-owl',
        preset: '@theme-ui/preset-funk',
        basePath: `/`,

      }},    
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }, 
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-transition-link",
    "gatsby-remark-embed-video",
    "gatsby-remark-responsive-iframe",
    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 400, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
        urlOverrides: [
          {
            id: 'youtube',
            embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
          }
        ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
        containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
      }
    }
  ],
}