import Players from "Components/Players";
import React, { useContext } from "react";
import { Context } from "Context";

const PlayersContainer = () => {
  const { state, setPlayerName } = useContext(Context);
  const { players, userListCount, userList, userName } = state;
  // console.log(
  //   "playersContainer rendering",
  //   players.map((p) => p.name)
  // );

  return <Players
    state={state}
    players={players}
    userListCount={userListCount}
    userList={userList}
    userName={userName}
    setPlayerName={setPlayerName}
  />;
};

export default React.memo(PlayersContainer);
