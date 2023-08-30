/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PlayerSelect = ({ id, idx, state, players, setPlayerName }) => {

  let arrayUserList = [];
  let localData = JSON.parse(localStorage.getItem("userList"));
  let userListLength = Object.keys(localData).length;

  for (let i = 0; i < userListLength; i++) {
    arrayUserList[i] = localData[i];
  }

  arrayUserList = arrayUserList.filter(function(item) {
    return item !== null && item !== undefined && item !== "";
  });

  return (
    <>
      <PlayerSelectBox key={idx} idx={idx} id={id} onChange={(e) => setPlayerName(e, idx)} value={players[idx].name}>

              <option value="noSelect" selected>- 선택 -</option>
        {arrayUserList.map((list, idxx) => {
            return (
              <option key={idxx} id={list} value={list}>{list}</option>
            );
        })}
      </PlayerSelectBox>
    </>
  );
};

export default React.memo(PlayerSelect);

const PlayerSelectBox = styled.select`
  width: 100%;
  height: 3.75rem;
`;