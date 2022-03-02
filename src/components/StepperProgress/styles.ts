import styled from 'styled-components';

export const StepperProgressContainer = styled.div`
  position: absolute;
  top: 15px;
  width: 100%;
  z-index: 9;
`;

export const StepProgressWrap = styled.div`
 width: 90%;
  position: relative;
  display: flex;
  margin: auto;
  justify-content: space-between;
`;


export const StepTitle = styled.div`
   text-align: center;
  font-size: 0.9rem;
  align-items: center;
  background: #fff;
  padding: 0 1rem;
  height: 30px;
`;


export const StepTitleNumber = styled.div`
 font-size: 1rem;
  background: #ceeeff;
  height: 30px;
  width: 30px;
  margin: auto;
  line-height: 1.5;
  border: 3px solid #fff;
  border-radius: 100%;
`;


export const StepProgressBar = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  top: 13px;
  z-index: -1;
  background: #e91e63;
  transition: width 1s cubic-bezier(0.23, 1, 0.32, 1) 0s;
`;

