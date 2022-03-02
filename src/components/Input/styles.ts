import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
`;

export const InputElement = styled.input`
  width: 100%;
  height: 26px;
  padding: 14px 16px 0 10px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

export const LabelElement = styled.label`
 font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  color: #999;
  pointer-events: none;
  position: absolute;
  transform: translate(0, 26px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;

  &:focus{
    transform: translate(0, 12px) scale(0.75);
  }
`;

