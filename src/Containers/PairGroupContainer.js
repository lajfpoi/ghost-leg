import PairGroup from "Components/PairGroup";
import React, { useContext } from "react";
import { Context } from "Context";

const PairGroupContainer = () => {
  const { state } = useContext(Context);
  const { results, players, cases, userName } = state;

  return <PairGroup results={results} players={players} cases={cases} userName={userName} />;
};

export default PairGroupContainer;
