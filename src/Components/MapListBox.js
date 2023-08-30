/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../app.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faLock, faTrash, faAngleDown, faAngleUp  } from "@fortawesome/free-solid-svg-icons";
import LegsList from "Components/LegsList";

const MapListBox = ({ state, mapList, addMap, saveMap, inputMapName, inputMapLegs, addMapLegs, mapLockToggle, removeMap, inputMapOrder, fixRandom }) => {

    const listLength = Object.values(mapList).length;
    const [toggleList, setToggleList] = useState({});

    useEffect(() => {
        if (listLength != 0) {
            for (let i = 0; i < listLength; i++) toggleList[i] = false;
        }
    }, []);
  
    const toggleMap = (idx) => {
      setToggleList({
        ...toggleList,
        [idx]: !toggleList[idx]
      });
    };
  
    return (
      <div class="List_wrap mapList_wrap">

        <div class="fixOrRandom">
            {state.mapOrderFix ? (
                <><button type="button" class="toggleFix" onClick={() => fixRandom()}><span></span></button><span>고정</span></>
            ) : <><button type="button" class="toggleRandom" onClick={() => fixRandom()}><span></span></button><span>랜덤</span></> }
            
        </div>

        <ul>
          
        {Object.values(mapList).map((list, idx) => {

            if (state.mapOrderFix && mapList[idx].mapLock) var className ='mapListDiv mapListDivLock';
            else var className = 'mapListDiv';


            return (
                <li key={idx} class="mapListSec">
                    
                {mapList[idx].mapLock ? (
                    <button type="button" class="mapLock mapLockOn" onClick={() => mapLockToggle(idx)}><FontAwesomeIcon icon={faLock} /></button>
                ) : <button type="button" class="mapLock" onClick={() => mapLockToggle(idx)}><FontAwesomeIcon icon={faLock} /></button>}
                
                {state.mapOrderFix && mapList[idx].mapLock && <input type="text" key={idx} min="1" class="mapFixOrder" value={mapList[idx].mapOrder}
                        onChange={(e) => {inputMapOrder(e, idx);}} />}
                <div class={className}>
                    <div class="mapListName">
                    <input type="text" key={idx} class="ListInput" value={mapList[idx].name}
                        onChange={(e) => {inputMapName(e, idx);}}/>
                    <button type="button" onClick={() => toggleMap(idx)}>
                    {toggleList[idx] ? (
                        <FontAwesomeIcon icon={faAngleUp} />
                    ) : <FontAwesomeIcon icon={faAngleDown} />}
                    </button>
                    </div>
                </div>
        
                <button type="button"><FontAwesomeIcon icon={faTrash} onClick={() => removeMap(idx)} /></button>
                
                {toggleList[idx] ? (
                    <LegsList 
                    idx={idx}
                    id={idx}
                    mapList={mapList}
                    inputMapName={inputMapName}
                    addMapLegs={addMapLegs}
                    inputMapLegs={inputMapLegs}
                    />
                    ) : null}
                </li>
            )
        })}
  
        </ul>
        
        <button type="button" class="btn_addList" onClick={addMap}><FontAwesomeIcon icon={faPlus} /></button>
        <button type="button" class="btn_addList" onClick={saveMap}>사다리맵 저장</button>
      </div>
    )
}

export default React.memo(MapListBox);