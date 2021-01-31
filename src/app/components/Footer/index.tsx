import React from 'react';
import { ThemeSwitch } from 'app/containers/ThemeSwitch';
import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
  padding: 1rem;
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
`;

const Footer = () => (
  <FooterContainer>
    <ThemeSwitch />
  </FooterContainer>
);

export default Footer;
