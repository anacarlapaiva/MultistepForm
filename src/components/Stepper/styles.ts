import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
  overflow: hidden;
  display: inline-block;
`;


export const StepperWrapper = styled.div`
  width: 600px;
  height: 100%;
`;

export const StepperSelector = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: inline-flex;
  /* Animação */
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
`;

export const StepperProgress = styled.div`
  position: absolute;
  top: 15px;
  width: 100%;
  z-index: 9;
`;

export const StepBody = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;


