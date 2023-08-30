import React from "react";
import styled from "styled-components";

const Paths = ({ player, userName, drawX, drawY }) => {

    const positionX = drawX - 60;
    const positionY = drawY*1.4 - 20;

    return (
      <>
        <PlayerIcon color={player.color} style={{
          top : positionY,
          left: positionX
        }}>{player.name}</PlayerIcon>
      </>
    );
};

export default React.memo(Paths);

const PlayerIcon = styled.span`
  width: 12rem;
  height: 4rem;
  line-height: 3.4rem;
  text-align: center;
  background-color: white;
  border: ${({ color }) => `3px solid ${color}`};
  border-radius: 2rem;
  position: absolute;
`;
