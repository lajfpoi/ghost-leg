import React, { useContext } from "react";
import { Context } from "Context";
import CounterButton from "Components/CounterButton";

const CounterButtonContainer = ({ direction }) => {
  const { incPlayers, decPlayers, state } = useContext(Context);

  return (
    <CounterButton
      gameState={state.gameState}
      playerCount={state.playerCount}
      incPlayers={incPlayers}
      decPlayers={decPlayers}
      direction={direction}
    />
  );
};

export default React.memo(CounterButtonContainer);
