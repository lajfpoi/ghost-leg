import React, { useState, useEffect } from "react";
import "../app.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const LegsList = ({idx, mapList, addMapLegs, inputMapLegs}) => {

    const legsObj = mapList[idx].legs;
    
    return (
        <div key={idx} class="mapListObject">
          <ul>
          
          {Object.values(legsObj).map((list, idxx) => {
  
            return (
              <li key={idxx}>{idxx}: <input type="text" key={idxx} class="ListInput" value={legsObj[idxx]} maxLength="5"
              onChange={(e) => {inputMapLegs(e, idx, idxx);}} /></li>
            )
          })}
  
  
          </ul>
          <button type="button" class="btn_addMap" onClick={() => addMapLegs(idx)}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}

export default React.memo(LegsList);