import React from "react";
import styled from "styled-components";
import CounterButtonContainer from "Containers/CounterButtonContainer";

const Counter = ({ playerCount }) => {
  return (
    <CounterWrapper>
      <CounterButtonContainer direction="left" />
      <Players aria-live="assertive">{playerCount}</Players>
      <CounterButtonContainer direction="right" />
    </CounterWrapper>
  );
};

export default Counter;

const Players = styled.span`
  font-size: 6rem;
  font-weight: 700;

  @media ${({ theme }) => theme.mobile} {
    font-size: 4rem;
  }
`;

const CounterWrapper = styled.div`
  margin: 5rem auto;
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.mobile} {
    width: 20rem;
  }
`;
