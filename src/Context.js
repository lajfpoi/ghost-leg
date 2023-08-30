import useHook from "Hooks";
import React from "react";

export const Context = React.createContext(null);

export const Provider = ({ children }) => {
  const {
    state,
    incPlayers,
    decPlayers,
    setPlayerName,
    addList,
    inputList,
    saveList,
    addMap,
    saveMap,
    inputMapName,
    inputMapOrder,
    addMapLegs,
    inputMapLegs,
    removeMap,
    mapLockToggle,
    fixRandom,
    enterGame,
    startGame,
    checkReady,
    inputCase,
    goHome,
    goResult,
    goGame,
    updateResult,
  } = useHook();

  const contextValue = {
    state,
    incPlayers,
    decPlayers,
    setPlayerName,
    addList,
    inputList,
    saveList,
    addMap,
    saveMap,
    inputMapName,
    inputMapOrder,
    removeMap,
    mapLockToggle,
    fixRandom,
    addMapLegs,
    inputMapLegs,
    enterGame,
    startGame,
    checkReady,
    inputCase,
    goHome,
    goResult,
    goGame,
    updateResult,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
