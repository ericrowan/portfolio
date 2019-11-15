import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Flex, Heading, Text } from "rebass"
import Container from "./../components/Container"
import { sizes } from "../utils/variables"

// TODO: Refactor styles
const StyledHeader = styled(Container)`
  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Header = () => (
  <StyledHeader width={sizes.xlarge}>
    <Flex alignItems="baseline">
      <Link variant="nav" to="/">
        <Heading as="h1" py={2} fontSize={"1em"} mb={[1, 0]}>
          Eric Rowan
        </Heading>
      </Link>
      <Flex fontSize={"0.9em"} ml={"auto"}>
        <Link variant="nav" to="/about">
          <Text py={2} mr={[3, 4]}>
            About
          </Text>
        </Link>
        {/* <Link variant="nav" to="/">
          <Text py={2} mr={[3, 4]}>
            Projects
          </Text>
        </Link> */}
        <a href="mailto:eric@ericrowan.com">
          <Text py={2}>Email</Text>
        </a>
      </Flex>
    </Flex>
  </StyledHeader>
)

export default Header
