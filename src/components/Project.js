import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Flex, Box, Heading, Text } from "rebass"
// import { Global, css } from "@emotion/core"
// import { motion } from "framer-motion"

const StyledProject = styled(Box)`
  /* background: ${props => props.background}; */
  transition: all 100ms 300ms ease-in-out;

  a {
    /* color: ${props => props.color}; */
    text-decoration: none;

    &:hover {
      /* opacity: 1; */
    }

    &:hover & img {
      opacity: 1;
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
      <div>{children}</div>
      <Box mt={3}>
        <Heading fontSize={[32, 36, 48]}>{title}</Heading>
        <Text fontSize={[18, 21, 24]}>{description}</Text>
      </Box>
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
