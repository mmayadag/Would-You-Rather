import * as React from 'react';
import styled from 'styled-components/macro';
import { NavLink } from '../../components/Link';

export function Logo() {
  return (
    <Wrapper>
      <NavLink to="/" title="Home">
        <Title>
          Would You Rather?
          <Description>
            Pick Your Side - <Red> Play </Red>
          </Description>
        </Title>
      </NavLink>
    </Wrapper>
  );
}
const Red = styled.span`
  color: green;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.1rem;
  color: ${p => p.theme.text};
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 0.6rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;
