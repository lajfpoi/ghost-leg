import React from "react";
import styled from "styled-components";
import UserListContainer from "Containers/UserListContainer";
import MapListContainer from "Containers/MapListContainer";

const Header = () => {

  return (
    <HeaderWrapper>
      <HeaderTitle aria-label="랜덤 사다리 타기 홈">
        <HomeLink
          aria-label="홈으로 가기"
          tabIndex="1"
          href="/"
        >
          랜덤 사다리 타기
        </HomeLink>
      </HeaderTitle>

      <MapListContainer></MapListContainer>
      <UserListContainer></UserListContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  height: 8rem;
  width: 100%;
  background-color: #577dc4;
  position: relative;

  @media ${({ theme }) => theme.mobile} {
    height: 6rem;
  }
`;

const HeaderTitle = styled.h1`
  margin: 0 auto;
  width: fit-content;
  height: 8rem;

  @media ${({ theme }) => theme.mobile} {
    height: 6rem;
  }
`;

const HomeLink = styled.a`
  color: white;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 8rem;
  padding: 1rem;
  border-radius: 5px;

  &:focus {
    box-shadow: 0 0 1px 2px white, 0 0 1px 5px cornflowerblue;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 2rem;
    font-weight: 600;
    line-height: 6rem;
  }
`;
