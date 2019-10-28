import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Flex, Box, Text } from "rebass"
import Container from "./../components/Container"
import { sizes } from "../utils/variables"

const StyledFooter = styled(Container)`
  margin: 3em auto;

  a {
    text-decoration: none;

    &:not(:first-of-type) {
      margin-left: 1em;
    }
  }
`

const Footer = () => (
  <StyledFooter as="footer" width={sizes.x_large}>
    <Flex>
      <Text>&copy; Eric Rowan</Text>
      <Box mx="auto" />
      <Text>Oakland, Calif.</Text>
      <Box mx="auto" />
      <Link variant="nav" to="/">
        Work
      </Link>
      <Link variant="nav" to="/about">
        Info
      </Link>
    </Flex>
  </StyledFooter>
)

export default Footer
