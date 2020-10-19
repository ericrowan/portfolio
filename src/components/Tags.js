import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Box, Heading, Text } from "rebass"

const StyledProject = styled(Box)`
  a {
    text-decoration: none;
  }
`

const Tags = ({ children, className, title, ...props }) => (
  <StyledTags {...props} className={className}>
    <Box mt={[1, 2]}>
      <Text fontSize={[2, 3]}>{tags}</Text>
    </Box>
  </StyledTags>
)

Tags.propTypes = {
  tags: PropTypes.string,
}

Tags.defaultProps = {
  title: undefined,
}

export default Tags
