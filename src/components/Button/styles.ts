import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: .7rem;
  border-radius: 5px;
  background-color: #ccc;
  cursor: ${props => props.disabled ? 'no-drop' : 'pointer'}
  
  
`;
