import {
  resetCase, setUserName,
  addUserList, getUserList,
  addMapList, inputMapListName, inputMapListOrder, removeMapList,
  getMapList, addMapListLegs, inputMapListLegs, lockMapList, saveMapList,
  getRandomLegs, getRandomPlayers } from "Utils";

export const data = [
  {
    id: 1,
    color: "gray",
    name: ''
  },
  {
    id: 2,
    color: "crimson",
    name: ''
  },
  {
    id: 3,
    color: "darkolivegreen",
    name: ''
  },
  {
    id: 4,
    color: "lightseagreen",
    name: ''
  },
  {
    id: 5,
    color: "darkorange",
    name: ''
  },
  {
    id: 6,
    color: "peru",
    name: ''
  },
  {
    id: 7,
    color: "royalblue",
    name: ''
  },
  {
    id: 8,
    color: "saddlebrown",
    name: ''
  },
  {
    id: 9,
    color: "salmon",
    name: ''
  },
  {
    id: 10,
    color: "rebeccapurple",
    name: ''
  },
];

export const initState = {
  page: "home",
  playerCount: 2,
  players: getRandomPlayers(2, data),
  cases: resetCase(2),
  results: {},
  gameState: "notReady",
  legs: getRandomLegs(2),
  userListCount: 2,
  userList: getUserList(2),
  userName: {},
  mapListCount: 0,
  mapList: getMapList(),
  mapOrderFix: false,
  mapLoop: 0
};

export const reducer = (state, action) => {
  let playerCount = 0
  let userListCount = 0
  switch (action.type) {
    case "INC_PLAYERS":
      playerCount = state.playerCount + 1;
      mapLoop = 0;

      return {
        ...state,
        playerCount,
        gameState: "notReady",
        players: getRandomPlayers(playerCount, data, state.userName),
        legs: getRandomLegs(playerCount, state.mapOrderFix, state.mapLoop),
        mapLoop: mapLoop
      };
    case "DEC_PLAYERS":
      playerCount = state.playerCount - 1
      mapLoop = 0;

      return {
        ...state,
        playerCount,
        gameState: "notReady",
        players: getRandomPlayers(playerCount, data, state.userName),
        legs: getRandomLegs(playerCount, state.mapOrderFix, state.mapLoop),
        mapLoop: mapLoop
      };
    case "SET_PlayerName":
      return {
        ...state,
        userName: setUserName(state.userName, action.idx, action.value, state.players)
      };
    
    case "ADD_List":
      let localData = JSON.parse(localStorage.getItem("userList"));
      let dataLength = Object.keys(localData).length;

      if (dataLength < 2) {userListCount = 3;}
      else {userListCount = dataLength + 1;}

      for (let i = 0; i < userListCount; i++) {
        if (state.userList[i] === undefined) state.userList[i] = "";
      }

      localStorage.setItem('userList', JSON.stringify(state.userList));

      return {
        ...state,
        userListCount,
        userList: addUserList(userListCount),
      };
    case "INPUT_List":
      return {
        ...state,
        userList: { ...state.userList, [action.idx]: action.value },
      };
    case "SAVE_List":
      let arrayUserList = [];

      for (let i = 0; i < Object.values(state.userList).length; i++) {
        arrayUserList[i] = state.userList[i];
      }

      localStorage.setItem('userList', JSON.stringify(arrayUserList));

      return {
        ...state
      }
    
    case "ADD_Map":
      let localMapData = JSON.parse(localStorage.getItem("mapList"));
      let dataMapLength = 0;

      if (localMapData === null) {dataMapLength = 0;}
      else {dataMapLength = Object.keys(localMapData).length;}

      let mapListCount = dataMapLength + 1;
      

      for (let i = 0; i < mapListCount; i++) {
        if (state.mapList[i] === undefined) state.mapList[i] = {
          id: i,
          name:"",
          legs:{},
          mapLock: false,
          mapOrder: 0
        };
      }

      localStorage.setItem('mapList', JSON.stringify(state.mapList));

      return {
        ...state,
        mapListCount,
        mapList: addMapList(mapListCount),
      };
    case "SAVE_Map":

      return {
        ...state,
        mapList: saveMapList(state.mapList, state.mapOrderFix),
        legs: getRandomLegs(state.playerCount, state.mapOrderFix, state.mapLoop),
      };

    case "REMOVE_Map":
      const mapListCount1 = state.mapListCount - 1;

      return {
        ...state,
        mapListCount: mapListCount1,
        mapList: removeMapList(state.mapList, action.idx),
      };

    case "Lock_Toggle":
      return {
        ...state,
        mapList: lockMapList(state.mapList, action.idx)
      };

    case "INPUT_MapName":
      return {
        ...state,
        mapList: inputMapListName(state.mapList, action.idx, action.value),
      };

    case "INPUT_MapOrder":
      return {
        ...state,
        mapList: inputMapListOrder(state.mapList, action.idx, action.value),
      };
    
    case "ADD_MapLegs":
      return {
        ...state,
        mapList: addMapListLegs(state.mapList, action.idx),
      };
    case "INPUT_MapLegs":
      return {
        ...state,
        mapList: inputMapListLegs(state.mapList, action.idx, action.idxx, action.value),
      };
    
    case "Fix_Random":

      var mapLoop = 0;
      var mapOrderFix = !state.mapOrderFix;

      return {
        ...state,
        mapOrderFix: mapOrderFix,
        legs: getRandomLegs(state.playerCount, mapOrderFix, mapLoop),
        mapLoop: mapLoop
      }

    case "ENTER_GAME":
      return {
        ...state,
        players: getRandomPlayers(state.playerCount, data, state.userName),
        cases: resetCase(state.playerCount),
        legs: getRandomLegs(state.playerCount, state.mapOrderFix, state.mapLoop),
      };
    case "START_GAME":
      return {
        ...state,
        gameState: "playing",
      };
    case "INPUT_CASE":
      return {
        ...state,
        cases: { ...state.cases, [action.idx]: action.value },
      };
    case "CHECK_READY":
      return {
        ...state,
        gameState: action.isReady ? "ready" : "notReady",
      };
    case "GO_HOME":

      var mapLoop = state.mapLoop + 1;

      return {
        ...state,
        page: "home",
        gameState: "notReady",
        results: {},
        players: getRandomPlayers(state.playerCount, data, state.userName),
        legs: getRandomLegs(state.playerCount, state.mapOrderFix, mapLoop),
        mapLoop: mapLoop
      };
    case "GO_RESULT":
      return {
        ...state,
        page: "result",
        gameState: "notReady",
      };
    case "GO_GAME":
      return {
        ...state,
        page: "home",
        gameState: "notReady",
        results: {},
        players: getRandomPlayers(playerCount, data, state.userName),
        cases: resetCase(state.playerCount),
        legs: getRandomLegs(state.playerCount, state.mapOrderFix, state.mapLoop),
      };
    case "UPDATE_RESULT":
      return {
        ...state,
        gameState:
          Object.keys(state.results).length + 1 === state.playerCount
            ? "done"
            : "playing",
        results: { ...state.results, [action.idx]: action.posX },
      };
    default:
      throw new Error("Unhandled action type");
  }
};
