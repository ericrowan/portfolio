import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import theme from "@rebass/preset"
import { Flex, Box } from "rebass"
import Header from "./Header"
import Footer from "./Footer"
import { sizes, colors } from "./../utils/variables"

const Layout = ({ children }) => (
  <Flex flexDirection="column" minHeight="100vh">
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          html {
            background: #f7fdf4;
          }
          body {
            // TODO: Use scaled spacing
            font-size: calc(
              16px + (24 - 16) * ((100vw - 300px) / (1600 - 300))
            );
            max-width: ${sizes.x_large};
            margin: 0 auto;
            color: black;
          }
          a {
            color: black;
            transition: all 300ms ease-in-out;

            &:hover {
              opacity: 0.33;
            }
          }
          p {
            margin: 0;
            & + p {
              margin-top: 1em;
            }
          }
          main {
            margin-bottom: auto;
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  </Flex>
)

export default Layout
