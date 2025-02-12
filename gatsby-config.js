module.exports = {
  siteMetadata: {
    title: 'Workshop on Demand Portal',
    author: 'WoD Team',
    description: 'The Workshop on Demand portal',
    siteUrl: 'https://github.com/Workshops-on-Demand',
    social: {
      twitter: 'wod',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-plugin-catch-links',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-transformer-sharp',
    {
        resolve: 'gatsby-plugin-feed',
        options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: {frontmatter: {date: DESC}}
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Workshop on Demand Portal',
        short_name: 'WoD Portal',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#00c781',
        showSpinner: false,
      },
    },
  ],
};
