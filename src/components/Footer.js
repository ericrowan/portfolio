import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Flex, Box, Text } from "rebass"
import Container from "./../components/Container"
import { sizes } from "../utils/variables"

const StyledFooter = styled(Container)`
  margin: 12vmax auto 4vmax;

  a {
    text-decoration: none;

    &:not(:first-of-type) {
      margin-left: 1.5em;
    }
  }
`

const Footer = () => (
  <StyledFooter as="footer" width={sizes.xlarge}>
    <Flex fontSize={[1, 2]}>
      <Text>&copy; Eric Rowan</Text>
      <Text mx="auto" display={["none", "block"]}>
        Oakland, Calif.
      </Text>
      <Link variant="nav" to="/about">
        About
      </Link>
      <Link variant="nav" to="/">
        Projects
      </Link>
      <a href="mailto:eric@ericrowan.com">Contact</a>
    </Flex>
  </StyledFooter>
)

export default Footer
