import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import theme from "@rebass/preset"
import { Flex } from "rebass"
import Header from "./Header"
import Footer from "./Footer"
import SEO from "./SEO"
import { sizes, colors } from "./../utils/variables"

const Layout = ({ children }) => (
  <>
    <SEO />
    <Flex flexDirection="column" minHeight="100vh">
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            html {
              font-size: calc(16px + 0.33vw);
              background: ${colors.eric.black};
            }
            body {
              max-width: ${sizes.xlarge};
              margin: 0 auto;
              color: ${colors.eric.white};
            }
            a {
              color: ${colors.eric.white};
              transition: all 300ms ease-in-out;

              &:hover {
                text-decoration: none;
              }
            }
            p {
              margin: 0;

              & + p,
              & + h1,
              & + h2,
              & + h3,
              & + h4,
              & + h5,
              & + h6,
              & + hr {
                margin-top: 1.5em;
              }
            }
            hr {
              height: 0;
              background: transparent;
              border-top: 2px solid ${colors.eric.black};
              border-bottom: 2px solid ${colors.eric.black};
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
  </>
)

export default Layout
