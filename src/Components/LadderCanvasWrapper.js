import React from "react";
import styled from "styled-components";

const LadderCanvasWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default React.memo(LadderCanvasWrapper);

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 42rem;
  margin: 2rem auto;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
    height: 50vh;
    margin: 1rem auto;
  }
`;
