import React from "react";
import SubButton from "./SubButton";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const RestartButton = ({ gameState, page, goHome }) => {

  if (page === "result") {

    console.log ("page : "+page);
    console.log ("gameState : "+gameState);
  
      return (
        <SubButton
          label="게임 다시 하기"
          text="다시 하기"
          icon={faRedo}
          event={goHome}
        />
      );
  }
  else return null;
};

export default React.memo(RestartButton);
