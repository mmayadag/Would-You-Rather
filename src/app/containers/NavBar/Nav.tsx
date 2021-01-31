import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { ReactComponent as TrophyIcon } from './assets/trophy.svg';
import { NavLink } from '../../components/Link';

export function Nav() {
  return (
    <Wrapper>
      <NavLink to="/add" title="New Question">
        <DocumentationIcon />
        New Question
      </NavLink>
      <NavLink to="/leaderboard" title="Leader Board">
        <StyledTrophyIcon />
        Leader Board
      </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const StyledTrophyIcon = styled(TrophyIcon)`
  width: 24px;
  margin-right: 8px;
  height: 24px;
`;
