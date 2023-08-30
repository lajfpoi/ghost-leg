import React, { useContext } from "react";
import { Context } from "Context";
import MapList from "Components/MapList";

const MapListContainer = () => {
  const { state, addMap, saveMap, inputMapName, addMapLegs, inputMapLegs, mapLockToggle, removeMap, inputMapOrder, fixRandom} = useContext(Context);
  const { mapListCount, mapList } = state;

  return (
    <MapList
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
    />
  );
};

export default React.memo(MapListContainer);
