import React from 'react';
import { Link } from '../../components/Link';

import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import { setAuthUser } from 'store/actions/authUser';

type ProfileBarProps = {
  authUser?: string;
  avatarURL?: string;
  setAuthUser: (s: string | null) => {};
};

const ProfileBar = ({ authUser, avatarURL, setAuthUser }: ProfileBarProps) => (
  <Wrapper>
    {authUser ? (
      <>
        <Username>{authUser}</Username>
        <Avatar>{avatarURL ? <AvatarImg src={avatarURL} /> : null}</Avatar>
        <StyledButton
          onClick={() => {
            setAuthUser(null);
          }}
        >
          Logout
        </StyledButton>
      </>
    ) : (
      <Link to="/login">Login</Link>
    )}
  </Wrapper>
);
const AvatarImg = styled.img`
  width: 100%;
`;
const Avatar = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background: gray;
  margin-right: 1rem;
  position: relative;
`;

const Username = styled.div`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.text};
  margin-right: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.875rem;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  color: ${p => p.theme.text};
  background-color: ${p => p.theme.background};
  border: 1px solid gray;
  padding: 0.4rem 1rem;
  font-size: 0.8rem;
  border-radius: 10px;
`;

function mapStateToProps({ authUser, users }) {
  return {
    authUser,
    avatarURL: users[authUser].avatarURL,
  };
}

export default connect(mapStateToProps, { setAuthUser })(ProfileBar);
