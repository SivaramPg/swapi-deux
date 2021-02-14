import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <LoaderContainer>
      <BlocksContainer>
        <Block1></Block1>
        <Block2></Block2>
        <Block3></Block3>
        <Block4></Block4>
      </BlocksContainer>
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.div`
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

const BlocksContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const Block = styled.div`
  width: 25px;
  height: 25px;

  margin: 17.5px;
  position: absolute;
  border-radius: 5px;

  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
`;

const block1Animation = keyframes`
    0% {
        top: 0;
        left: 0;
    }
    25% {
        top: 0;
        left: 60px;
    }
    50% {
        top: 60px;
        left: 60px;
    }
    75% {
        top: 60px;
        left: 0;
    }
    100% {
        top: 0;
        left: 0;
    }
`;

const block2Animation = keyframes`
    0% {
        top: 0;
        left: 60px;
    }
    25% {
        top: 60px;
        left: 60px;
    }
    50% {
        top: 60px;
        left: 0;
    }
    75% {
        top: 0;
        left: 0;
    }
    100% {
        top: 0;
        left: 60px;
    }
`;

const block3Animation = keyframes`
    0% {
        top: 60px;
        left: 60px;
    }
    25% {
        top: 60px;
        left: 0;
    }
    50% {
        top: 0;
        left: 0;
    }
    75% {
        top: 0;
        left: 60px;
    }
    100% {
        top: 60px;
        left: 60px;
    }
`;

const block4Animation = keyframes`
    0% {
        top: 60px;
        left: 0;
    }
    25% {
        top: 0;
        left: 0;
    }
    50% {
        top: 0;
        left: 60px;
    }
    75% {
        top: 60px;
        left: 60px;
    }
    100% {
        top: 60px;
        left: 0;
    }
`;

const Block1 = styled(Block)`
  background-color: darkcyan;
  animation-name: ${block1Animation};
`;

const Block2 = styled(Block)`
  border-radius: 50%;
  background-color: darkorchid;
  animation-name: ${block2Animation};
`;

const Block3 = styled(Block)`
  background-color: darkcyan;
  animation-name: ${block3Animation};
`;

const Block4 = styled(Block)`
  border-radius: 50%;
  background-color: darkorchid;
  animation-name: ${block4Animation};
`;
