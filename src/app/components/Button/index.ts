import styled from 'styled-components/macro';

export const Button = styled.button`
  font-size: 1rem;
  line-height: 1.5;
  color: ${p => p.theme.background};
  background-color: ${p => p.theme.text};
  border: 1px solid ${p => p.theme.border};
  padding: 0.3rem 1.5rem;
  border-radius: 5px;
  margin: 0.625rem 0 1.5rem 0;
  width: 100%;
`;
