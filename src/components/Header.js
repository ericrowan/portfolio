import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Flex, Box } from "rebass"
import Container from "./../components/Container"
import { sizes } from "../utils/variables"

// TODO: Refactor styles
const StyledHeader = styled(Container)`
  margin-top: 3em;
  top: 0;
  z-index: 1;

  a {
    text-decoration: none;

    &:not(:first-of-type) {
      margin-left: 1em;
    }
  }
`

const Header = () => (
  <StyledHeader width={sizes.x_large}>
    <Flex>
      <Box>
        <Link variant="nav" to="/">
          <strong>Eric Rowan</strong>
        </Link>
      </Box>
      <Box mx="auto"></Box>
      <Box>
        <Link variant="nav" to="/">
          Work
        </Link>
        <Link variant="nav" to="/info">
          Info
        </Link>
        <a href="mailto:eric@ericrowan.com">Email</a>
      </Box>
    </Flex>
  </StyledHeader>
)

export default Header
