import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const CounterButton = ({ playerCount, direction, incPlayers, decPlayers, gameState }) => {
  return (
    <>
      {direction === "left" ? (
        <Button
          aria-label="플레이어 수 감소"
          onClick={decPlayers}
          disabled={playerCount <= 2 || gameState == "playing" || gameState == "done"}
        >
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            color={playerCount < 3 || gameState == "playing" || gameState == "done" ? "lightgray" : "orange"}
          />
        </Button>
      ) : (
        <Button
          aria-label="플레이어 수 증가"
          onClick={incPlayers}
          disabled={playerCount >= 10 || gameState == "playing" || gameState == "done"}
        >
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            color={playerCount > 9 || gameState == "playing" || gameState == "done" ? "lightgray" : "orange"}
          />
        </Button>
      )}
    </>
  );
};

export default React.memo(CounterButton);

const Button = styled.button`
  font-size: 4rem;
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  border-radius: 50%;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: 0 0 1px 2px white, 0 0 1px 5px orange;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 3.5rem;
    line-height: 3.5rem;

    &:focus {
      box-shadow: 0 0 1px 1px white, 0 0 1px 3px orange;
    }
  }
`;
