import React from 'react';
// import styled from '@emotion/styled';
import { Flex, Box, Heading, Text, Link } from 'rebass';
import Layout from '../components/Layout';

const Work = () => (
  <Layout>
    <Box maxWidth='48em' px={5} my={6}>
      <Heading fontSize={[4, 5, 6]} mb={20}>
        Projects.
      </Heading>
    </Box>
  </Layout>
);

export default Work;
