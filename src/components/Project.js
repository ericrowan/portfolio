import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Flex, Box, Heading, Text } from "rebass"
// import { Global, css } from "@emotion/core"
// import { motion } from "framer-motion"

const StyledProject = styled(Box)`
  a,
  a:hover {
    text-decoration: none !important;
  }

  div {
    transition: all 50ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`

let path = "/work/"

const Project = ({
  children,
  className,
  background,
  color,
  title,
  description,
  url,
  ...props
}) => (
  <StyledProject className={className} color={color} background={background}>
    <Link to={path + url}>
      <div>
        {children}
        <Box mt={3}>
          <Heading fontSize={[5]}>{title}</Heading>
          <Text fontSize={[3]}>{description}</Text>
        </Box>
      </div>
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
