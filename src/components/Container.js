import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Box } from "rebass"
import { sizes } from "../utils/variables"
// import { fontWeights, space } from "../components/Theme"

const StyledContainer = styled(Box)`
  // TODO: Add Rebass spacing/breakpoints
  margin: 4em auto;
  padding: 0 2em;
  max-width: ${props => (props.full ? "100%" : props.width) || sizes.medium};
  width: 100%;
  grid-template-columns: ${props => props.gridCols || "1fr 1fr"};
  grid-gap: ${props => props.gridGap || "1em"};

  @media (max-width: ${sizes.large}) {
    grid-template-columns: 1fr !important;
    padding: 0 1.5em;
    /* margin: 3em auto; */
  }

  @media (max-width: ${sizes.small}) {
    padding: 0 1em;
  }

  ${({ grid }) =>
    grid &&
    css`
      display: grid;

      p {
        margin: 0;
      }
    `}

  ${({ text }) =>
    text &&
    css`
      margin-top: 12em;
    `}
`

const Container = ({
  children,
  className,
  grid,
  gridCols,
  text,
  center,
  ...props
}) => (
  <StyledContainer
    {...props}
    as="section"
    className={className}
    grid={grid}
    gridCols={gridCols}
    text={text}
    center={center}
  >
    {children}
  </StyledContainer>
)

Container.propTypes = {
  // gridCount: PropTypes.string,
  // sizes: PropTypes.shape()
}

Container.defaultProps = {
  // gridCount: undefined,
  // sizes: undefined
}

export default Container
