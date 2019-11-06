import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Box } from "rebass"
import { sizes } from "../utils/variables"
// import { fontWeights, space } from "../components/Theme"

const StyledContainer = styled(Box)`
  // TODO: Add Rebass spacing/breakpoints
  margin: 4vmax auto;
  padding: 0 6vmin;
  max-width: ${props => (props.full ? "100%" : props.width) || sizes.medium};
  width: 100%;
  grid-template-columns: ${props => props.gridCols || "1fr 1fr"};
  grid-gap: ${props => props.gridGap || "1.5em"};

  @media (max-width: ${sizes.medium}) {
    grid-template-columns: 1fr !important;
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
      margin-top: 6vmax;
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
