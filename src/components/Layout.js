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
            font-size: calc(16px + 0.33vw);
          }
          body {
            max-width: ${sizes.xlarge};
            margin: 0 auto;
            color: black;
          }
          a {
            color: black;
            transition: all 300ms ease-in-out;

            &:hover {
              text-decoration: underline !important;
            }
          }
          p {
            margin: 0;

            & + p {
              margin-top: 1.5em;
            }
          }
          main {
            margin-bottom: auto;
            margin-top: 10vmax;
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
