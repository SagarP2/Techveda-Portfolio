import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const Spinner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid rgba(66, 153, 225, 0.1);
  border-top-color: #4299e1;
  border-radius: 50%;
  animation: ${spin} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`;

const InnerSpinner = styled(Spinner)`
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-width: 2px;
  animation-duration: 0.8s;
  animation-direction: reverse;
`;

const LoadingText = styled.div`
  margin-top: 1.5rem;
  color: #4299e1;
  font-size: 1rem;
  font-weight: 500;
  animation: ${pulse} 1.5s ease-in-out infinite;
  background: linear-gradient(90deg, #4299e1, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LoadingSpinner = () => {
  return (
    <LoadingWrapper>
      <SpinnerContainer>
        <Spinner />
        <InnerSpinner />
      </SpinnerContainer>
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

export default LoadingSpinner; 