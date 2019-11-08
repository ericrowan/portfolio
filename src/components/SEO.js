import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import favicon from "../images/favicon.png"

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || "/"}`,
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <link rel="shortcut icon" type="image/svg" href={favicon} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`
