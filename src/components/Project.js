import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Box, Heading, Text } from "rebass"
// import { Global, css } from "@emotion/core"
// import { motion } from "framer-motion"

const StyledProject = styled(Box)`
  a {
    text-decoration: none;
  }

  article {
    transition: all 50ms ease-in-out;

    &:hover {
      /* transform: scale(1.033); */
    }
  }
`

let path = "/project/"

const Project = ({
  children,
  className,
  title,
  description,
  url,
  ...props
}) => (
  <StyledProject {...props} className={className}>
    <Link to={path + url}>
      <article>
        {children}
        <Box mt={[2, 3]}>
          <Heading fontSize={[4, 5]}>{title}</Heading>
          <Text fontSize={[2, 3]}>{description}</Text>
        </Box>
      </article>
    </Link>
  </StyledProject>
)

Project.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
}

Project.defaultProps = {
  background: undefined,
  title: undefined,
  description: undefined,
  url: PropTypes.string,
}

export default Project
