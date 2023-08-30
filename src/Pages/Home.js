import CounterContainer from "Containers/CounterContainer";
import CaseContainer from "Containers/CaseListContainer";
import LadderContainer from "Containers/LadderContainer";
import PlayersContainer from "Containers/PlayersContainer";
import SubButtonGroupContainer from "Containers/SubButtonGroupContainer";
import React from "react";

const Home = () => {
  return (
    <>
      <CounterContainer />
      <PlayersContainer />
      <LadderContainer />
      <CaseContainer />
      <SubButtonGroupContainer />
    </>
  );
};

export default React.memo(Home);
