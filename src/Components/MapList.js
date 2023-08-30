/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../app.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPlus, faLock, faTrash, faAngleDown, faAngleUp  } from "@fortawesome/free-solid-svg-icons";
import MapListBox from "Components/MapListBox";

const UserListCon = ({ state, mapListCount, mapList, addMap, saveMap, inputMapName, addMapLegs, inputMapLegs, mapLockToggle, removeMap, inputMapOrder, fixRandom }) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const toggleList = () => setIsVisible(!isVisible);

  return (
    <>
        {state.mapOrderFix ? 
          <ButtonFix aria-label="사다리 넣기"><FontAwesomeIcon icon={faMap} onClick={toggleList} /></ButtonFix>
          : <Button aria-label="사다리 넣기"><FontAwesomeIcon icon={faMap} onClick={toggleList} /></Button> }
        
          {isVisible && <MapListBox 
          mapListCount={mapListCount}
          mapList={mapList}
          addMap={addMap}
          saveMap={saveMap}
          inputMapName={inputMapName}
          addMapLegs={addMapLegs}
          inputMapLegs={inputMapLegs}
          mapLockToggle={mapLockToggle}
          removeMap={removeMap}
          state={state}
          inputMapOrder={inputMapOrder}
          fixRandom={fixRandom}
        />}
    </>
  );
};


const ButtonFix = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  top: 2.4rem;
  right: 8rem;
  background: none;
  color: #ffd000;
  font-size: 3rem;


  @media ${({ theme }) => theme.mobile} {
    width: 3rem;
    height: 3rem;
    top: 1.5rem;
    right: 4.5rem;
  }
`;

const Button = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  top: 2.4rem;
  right: 8rem;
  background: none;
  color: #fff;
  font-size: 3rem;


  @media ${({ theme }) => theme.mobile} {
    width: 3rem;
    height: 3rem;
    top: 1.5rem;
    right: 4.5rem;
  }
`;

export default React.memo(UserListCon);