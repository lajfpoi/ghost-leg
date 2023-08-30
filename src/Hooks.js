import { useReducer, useCallback } from "react";
import { initState, reducer } from "Reducer";

const useHook = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const incPlayers = useCallback(() => dispatch({ type: "INC_PLAYERS" }), []);
  const decPlayers = useCallback(() => dispatch({ type: "DEC_PLAYERS" }), []);

  const setPlayerName = useCallback((e, idx) => {
    const { value } = e.target;
    dispatch({ type: "SET_PlayerName", idx, value });
  }, []);

  const addList = useCallback(() => dispatch({ type: "ADD_List" }), []);
  const inputList = useCallback((e, idx) => {
    const { value } = e.target;
    dispatch({ type: "INPUT_List", idx, value });
  }, []);
  const saveList = useCallback(() => dispatch({ type: "SAVE_List" }), []);

  const addMap = useCallback(() => dispatch({ type: "ADD_Map" }), []);
  const saveMap = useCallback(() => dispatch({ type: "SAVE_Map" }), []);
  const removeMap = useCallback((idx) => dispatch({ type: "REMOVE_Map", idx }), []);
  const inputMapName = useCallback((e, idx) => {
    const { value } = e.target;
    dispatch({ type: "INPUT_MapName", idx, value });
  }, []);
  const inputMapOrder = useCallback((e, idx) => {
    const { value } = e.target;
    dispatch({ type: "INPUT_MapOrder", idx, value });
  }, []);
  const mapLockToggle = useCallback((idx) => dispatch({ type: "Lock_Toggle", idx }), []);
  const fixRandom = useCallback(() => dispatch({ type: "Fix_Random" }), []);

  const addMapLegs = useCallback((idx) => dispatch({ type: "ADD_MapLegs", idx }), []);
  const inputMapLegs = useCallback((e, idx, idxx) => {
    const { value } = e.target;
    dispatch({ type: "INPUT_MapLegs", idx, idxx, value });
  }, []);

  const enterGame = useCallback(() => dispatch({ type: "ENTER_GAME" }), []);
  const startGame = useCallback(() => dispatch({ type: "START_GAME" }), []);

  const checkReady = useCallback((cases) => {
    const isReady = Object.values(cases).every((value) => value.trim() !== "");
    dispatch({ type: "CHECK_READY", isReady });
  }, []);

  const inputCase = useCallback((e, idx) => {
    const { value } = e.target;
    dispatch({ type: "INPUT_CASE", idx, value });
  }, []);

  const goHome = useCallback(() => dispatch({ type: "GO_HOME" }), []);
  const goResult = useCallback(() => dispatch({ type: "GO_RESULT" }), []);
  const goGame = useCallback(() => dispatch({ type: "GO_GAME" }), []);

  const updateResult = (idx, posX) =>
    dispatch({ type: "UPDATE_RESULT", idx, posX });

  return {
    state,
    incPlayers,
    decPlayers,
    setPlayerName,
    addList,
    inputList,
    saveList,
    addMap,
    saveMap,
    removeMap,
    mapLockToggle,
    fixRandom,
    inputMapName,
    inputMapOrder,
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
};

export default useHook;
