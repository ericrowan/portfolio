import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Flex, Box } from "rebass"
import Container from "./../components/Container"
import { sizes } from "../utils/variables"

// TODO: Refactor styles
const StyledHeader = styled(Container)`
  margin-top: 4em;
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
  <StyledHeader width={sizes.large}>
    <Flex>
      <Link variant="nav" to="/">
        Eric Rowan
        <br />
        Interactive Designer
      </Link>
    </Flex>
  </StyledHeader>
)

export default Header
