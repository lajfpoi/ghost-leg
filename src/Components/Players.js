/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";
import A11yTitle from "./A11yTitle";
import PlayerSelect from "Components/PlayerSelect";

const Players = ({ players, userName, state, setPlayerName }) => {

  return (
    <>
      <A11yTitle element="h3" text="플레이어 목록" />
      <PlayerList>
        {players.map((id, idx) => {
            return (
              <Player key={idx}>
                <PlayerSelect key={idx} idx={idx} id={id} userName={userName} state={state} players={players} setPlayerName={setPlayerName} />
              </Player>
            );
        })}
      </PlayerList>
    </>
  );
};

export default React.memo(Players);

const PlayerList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  width: 90%;

  @media ${({ theme }) => theme.mobile} {
    width: 100%;
  }
`;

const Player = styled.li`
  width: 20%;
  padding: 0 0.5%;
`;