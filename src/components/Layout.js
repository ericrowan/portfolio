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
            font-size: calc(18px + 0.1vw);
          }
          body {
            max-width: ${sizes.x_large};
            margin: 0 auto;
            color: black;
          }
          h1 {
            @media screen and (max-width: 36em) {
              /* font-size: calc(21px + 1vw); */
              hyphens: auto !important;
            }
          }
          a {
            color: black;
            transition: all 300ms ease-in-out;

            &:hover {
              /* opacity: 0.33; */
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
