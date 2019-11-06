import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Flex, Box, Heading, Text } from "rebass"
import Container from "./../components/Container"
import { sizes } from "../utils/variables"

// TODO: Refactor styles
const StyledHeader = styled(Container)`
  a {
    text-decoration: none;
  }
`

const Header = () => (
  <StyledHeader width={sizes.xlarge}>
    <Flex flexDirection={["column", "row"]} alignItems="baseline">
      <Link variant="nav" to="/">
        <Heading as="h1" fontSize={[2, 3]} mb={[1, 0]}>
          Eric Rowan
        </Heading>
      </Link>
      <Flex fontSize={[1, 2]} ml={[0, "auto"]}>
        <Link variant="nav" to="/about">
          <Text mr={[3, 4]}>About</Text>
        </Link>
        <Link variant="nav" to="/">
          <Text mr={[3, 4]}>Projects</Text>
        </Link>
        <a href="mailto:eric@ericrowan.com">
          <Text>Email</Text>
        </a>
      </Flex>
    </Flex>
  </StyledHeader>
)

export default Header
