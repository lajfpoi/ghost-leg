import SubButtonGroup from "Components/SubButtonGroup";
import React, { useContext } from "react";
import { Context } from "Context";

const SubButtonGroupContainer = () => {
  const { state, goHome, goResult } = useContext(Context);
  const { gameState, page } = state;

  return (
    <SubButtonGroup
      gameState={gameState}
      page={page}
      goHome={goHome}
      goResult={goResult}
    />
  );
};

export default React.memo(SubButtonGroupContainer);
