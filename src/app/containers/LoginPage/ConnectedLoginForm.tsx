import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from 'store/actions/authUser';
import { Title } from 'app/components/Title';
import { Button } from 'app/components/Button';
import styled from 'styled-components';

const LoginForm = ({ setAuthUser, users }: any) => {
  // const state = useSelector((state: any) => state);

  const [value, setValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const authUser = value;

    setAuthUser(authUser);
  };
  const generateDropdownData = () => {
    return users.map(user => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Title>Sign In</Title>
      UserName:
      <StyledSelect
        value={value}
        onChange={e => {
          setValue(e.target.value);
          setAuthUser(e.target.value);
        }}
      >
        <option selected value="">
          Select...
        </option>
        {generateDropdownData().map(i => (
          <option {...i}>{i.text}</option>
        ))}
      </StyledSelect>
      <Button disabled={value === ''} onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
};
const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
`;

function mapStateToProps(state) {
  const { users } = state;
  console.log({ s2: state });
  return {
    users: Object.values(users),
  };
}
const ConnectedLoginForm = connect(mapStateToProps, { setAuthUser })(LoginForm);

export default ConnectedLoginForm;
