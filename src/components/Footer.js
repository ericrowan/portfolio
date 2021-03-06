import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Flex, Box, Text } from "rebass"
import Container from "./../components/Container"
import { sizes } from "../utils/variables"

const StyledFooter = styled(Container)`
  margin: 12vmax auto 4vmax;
  opacity: 0.5;

  &:hover nav {
    opacity: 1 !important;
    transition: all 100ms ease-in-out;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Footer = () => (
  <StyledFooter as="footer" width={sizes.xlarge}>
    <Flex fontSize={[1, 2]}>
      <Text mr={["auto", 0]}>&copy; Eric Rowan</Text>
      <Text mx="auto" display={["none", "block"]}>
        #BlackLivesMatter
      </Text>
      <Link variant="nav" to="/">
        <Text mr={[3, 4]}>Work</Text>
      </Link>
      <Link variant="nav" to="/about">
        <Text mr={[3, 4]}>About</Text>
      </Link>
      <a href="mailto:eric@ericrowan.com">
        <Text>Contact /</Text>
      </a>
    </Flex>
  </StyledFooter>
)

export default Footer
