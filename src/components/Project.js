import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Flex, Box, Text } from "rebass"
// import { motion } from "framer-motion"

const StyledProject = styled(Box)`
  transition: all 100ms 300ms ease-in-out;
  background: ${props => props.background};

  &:hover {
    transform: scale(0.9);
  }

  a {
    color: ${props => props.color};
    text-decoration: none;
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
    <Link to={path + url}>{children}</Link>
    <Flex
      py={(1, 2, 3)}
      px={[2, 3, 4]}
      sx={{
        alignItems: "baseline",
      }}
    >
      <Text fontSize={[32, 36, 48]}>{title}</Text>
      <Text fontSize={[14, 16, 20]} textAlign="right" ml="auto">
        {description}
      </Text>
    </Flex>
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
