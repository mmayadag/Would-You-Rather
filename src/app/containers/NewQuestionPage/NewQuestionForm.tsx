import React, { useState } from 'react';
import { Title } from 'app/components/Title';
import { SubTitle } from 'app/components/SubTitle';
import { P } from 'app/components/P';
import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';
import { Wrapper } from 'app/components/Wrapper';
import { Container } from 'app/components/Container';
import { connect } from 'react-redux';
import { handleSaveQuestion } from 'store/actions/questions';
import { useHistory } from 'react-router-dom';

const NewQuestionForm = ({ authUser, handleSaveQuestion }: any) => {
  const [state, setState] = useState({ option1: '', option2: '' });
  const history = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { option1, option2 } = state;

    new Promise(res => {
      setState({ ...state });
      handleSaveQuestion(option1, option2, authUser);
      setTimeout(() => res('success'), 1000);
    }).then(() => {
      setState({
        option1: '',
        option2: '',
      });
      history.push('/');
    });
  };
  const disabled = state.option1 === '' || state.option2 === '';
  return (
    <Wrapper>
      <Title>Create New Question</Title>
      <SubTitle>Complete the question:</SubTitle>
      <Container>
        <P>Would you rather:</P>
        <Input
          id="option1"
          value={state.option1}
          placeholder="Enter option 1..."
          onChange={e => {
            setState({ ...state, option1: e.target.value });
          }}
        />
        or
        <Input
          id="option2"
          value={state.option2}
          placeholder="Enter option 2..."
          onChange={e => {
            setState({ ...state, option2: e.target.value });
          }}
        />
        <Button
          disabled={disabled}
          value={state.option1}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Container>
    </Wrapper>
  );
};

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps, { handleSaveQuestion })(
  NewQuestionForm,
);
