import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { Flex, Box } from 'rebass';
import Container from './../components/Container';
import { sizes } from '../utils/variables';

// TODO: Refactor styles
const StyledHeader = styled(Container)`
  margin-bottom: 0;
  margin-top: 2em;
  position: fixed;
  top: 0;
  z-index: 1;

  a {
    text-decoration: none;

    &:not(:first-of-type) {
      margin-left: 1em;
    }

    &:hover {
      color: blueviolet;
    }
  }
`;

const Header = () => (
  <StyledHeader width={sizes.x_large}>
    <Flex>
      <Link variant='nav' to='/'>
        Eric Rowan
      </Link>
      <Box mx='auto' />
      <Link variant='nav' to='/'>
        Work
      </Link>
      <Link variant='nav' to='/about'>
        Info
      </Link>
    </Flex>
  </StyledHeader>
);

export default Header;
