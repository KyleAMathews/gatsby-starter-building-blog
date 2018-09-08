import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { withTheme } from 'emotion-theming'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import typography, { rhythm, scale } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug} css={{ marginBottom: rhythm(1.5) }}>
              <h2
                css={{
                  marginBottom: rhythm(1 / 8),
                }}
              >
                <Link
                  css={{ boxShadow: 'none', color: `inherit` }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </h2>
              <div
                css={{
                  ...scale(-1 / 5),
                  fontFamily: typography.options.headerFontFamily.join(`,`),
                  display: `block`,
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {node.frontmatter.date}
              </div>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default withTheme(BlogIndex)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
