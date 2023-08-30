const resetCase = (playerCount) => {
  const cases = {};
  for (let i = 0; i < playerCount; i++) cases[i] = "";
  return cases;
};

const setUserName = (userName, idx, value, players) => {
  userName[idx] = value;
  players[idx].name = value;
  
  return userName;
};


const addUserList = (userListCount) => {
  const userList = {};
  let localData = JSON.parse(localStorage.getItem("userList"));

  for (let i = 0; i < userListCount; i++) userList[i] = localData[i];
  
  return userList;
};


const addMapList = (mapListCount) => {
  const mapList = [];
  const localMapData = JSON.parse(localStorage.getItem("mapList"));

  for (let i = 0; i < mapListCount; i++) mapList[i] = localMapData[i];
  
  return mapList;
};

const removeMapList = (mapList, idx) => {
  mapList = mapList.filter(function(item) {
    return item.id != idx;
  });

  for (let i = 0; i < Object.values(mapList).length; i++) {
    mapList[i].id = i;
  }

  localStorage.setItem('mapList', JSON.stringify(mapList));
  
  return [...mapList];
};

const inputMapListName = (mapList, idx, value) => {
  mapList[idx].name = value;

  localStorage.setItem('mapList', JSON.stringify(mapList));
  
  return [...mapList];
};

const inputMapListOrder = (mapList, idx, value) => {
  let onlyNumber = value.replace(/[^0-9]/g, '');
  let mapListLength = Object.keys(mapList).length;

  mapList[idx].mapOrder = onlyNumber;



  localStorage.setItem('mapList', JSON.stringify(mapList));
  
  return [...mapList];
};

const saveMapList = (mapList, mapOrderFix) => {

  let fixOrder_arr = [];
  let alertText = '';
  let duplicateFlag = false;

  if (mapOrderFix && mapList.length != 0) {

    for(var i=0; i < mapList.length; i++) {
      var now_arr = [];

      if(mapList[i].mapOrder == 0) mapList[i].mapLock = false;
      else if (mapList[i].mapLock == false) {
        mapList[i].mapOrder = 0;
      }
      else {
        if (fixOrder_arr[mapList[i].mapOrder] === undefined) {
          now_arr[0] = [i, mapList[i].name];
          fixOrder_arr[mapList[i].mapOrder] = now_arr;
        }
        else {
          now_arr = fixOrder_arr[mapList[i].mapOrder];
          now_arr[now_arr.length] = [i, mapList[i].name];}
          fixOrder_arr[mapList[i].mapOrder] = now_arr;
        }
    }

    fixOrder_arr  = fixOrder_arr.filter(function(item) {
      return item !== null && item !== undefined;
    });

    for(var j=0; j < fixOrder_arr.length; j++) {

      if (fixOrder_arr[j].length > 1) {
        
        for(var i=0; i<fixOrder_arr[j].length; i++) {
          alertText = alertText + fixOrder_arr[j][i][1] + " ";
        }

        alert("중복된 순서가 있습니다. \n중복된 맵 리스트 : " + alertText);
        duplicateFlag = true;
        
        for(var i=0; i<fixOrder_arr[j].length; i++) {
          mapList[fixOrder_arr[j][i][0]].mapOrder = 0;
        }

        fixOrder_arr = fixOrder_arr.filter(function(item) {
          return item !== fixOrder_arr[j];
        });

        break;
      }
    }

    if (!duplicateFlag) {
      alert("공백 순서를 제거하고 새로 정렬합니다.");

      for(var i=0; i<fixOrder_arr.length; i++) {
        mapList[fixOrder_arr[i][0][0]].mapOrder = i+1;
      }
    }
  }

  localStorage.setItem('mapList', JSON.stringify(mapList));

  return [...mapList];
};


const addMapListLegs = (mapList, idx) => {
  const legsCount = Object.keys(mapList[idx].legs).length;

  if (legsCount < 9) {
    mapList[idx].legs[legsCount] = "";
    localStorage.setItem('mapList', JSON.stringify(mapList));
  }
  else { alert("최대 9개까지 설정 가능합니다."); }

  
  return [...mapList];
};

const inputMapListLegs = (mapList, idx, idxx, value) => {
  let onlyNumber = value.replace(/[^0-8]/g, '');

  const prev_legs = mapList[idx].legs[idxx-1];
  let now_legs = mapList[idx].legs[idxx];
  const next_legs = mapList[idx].legs[idxx+1];

  let prev_Arr = [];
  let now_Arr = [];
  let next_Arr = [];

  if (prev_legs !== undefined && prev_legs !== null && prev_legs != "") {
    prev_Arr = Array.from(prev_legs);

    for (let i = 0; i < prev_Arr.length ; i++) {
      onlyNumber = onlyNumber.replace(prev_Arr[i], '');
    }
  }

  now_legs = onlyNumber;

  if (next_legs !== undefined && next_legs !== null && next_legs != "") {
    next_Arr = Array.from(next_legs);

    for (let j = 0; j < next_Arr.length ; j++) {
      onlyNumber = onlyNumber.replace(next_Arr[j], '');
    }
  }

  now_legs = onlyNumber;

  if (next_legs !== now_legs && now_legs !== null && now_legs != "") {
    now_Arr = Array.from(now_legs);

    for (let j = 0; j < now_Arr.length - 1 ; j++) {
      if (now_Arr[now_Arr.length-1] == now_Arr[j]) {
        onlyNumber = onlyNumber.slice(0, -1);
      }
    }
  }

  
  /*for (let j = 0; j < mapList[idx].legs[idxx]; j++) {
    arrLegs = Array.from(legsData[j]);

    for (let k = 0; k  < arrLegs.length; k++) {
      arrLegs[k] = Number(arrLegs[k]);
    }

    arrLegsL[j] = arrLegs;
  }*/



  mapList[idx].legs[idxx] = onlyNumber;

  if (onlyNumber < 100) {
    mapList[idx].mapLock = false;
  }

  localStorage.setItem('mapList', JSON.stringify(mapList));
  
  return [...mapList];
};

const getUserList = (userListCount) => {
  const userList = {};
  let arrayUserList = [];
  let localData = JSON.parse(localStorage.getItem("userList"));
  
  let dataLength2 = 0;

  if (localData === null) {dataLength2 = 0;}
  else {dataLength2 = Object.values(localData).length;}

  for (let i = 0; i < dataLength2; i++) {
    arrayUserList[i] = localData[i];
  };

  arrayUserList  = arrayUserList.filter(function(item) {
    return item !== null && item !== undefined && item !== "";
  });

  localStorage.setItem('userList', JSON.stringify(arrayUserList));
  
  let dataLength = arrayUserList.length;

  if (dataLength < userListCount) {
    for (let i = 0; i < userListCount; i++) {
      if (arrayUserList[i] === undefined) userList[i] = "";
      else userList[i] = arrayUserList[i];
    }
  }
  else {
    for (let i = 0; i < dataLength; i++) userList[i] = arrayUserList[i];
  }
  
  return userList;
};

const getMapList = () => {
  let mapList = [];
  let mapData = JSON.parse(localStorage.getItem("mapList"));
  let mapLength2 = 0;

  if (mapData === null) {mapLength2 = 0;}
  else {mapLength2 = Object.values(mapData).length;}

  if (mapLength2 == 0) {mapList = [];}
  else {
    for (let i = 0; i < mapLength2; i++) {
      mapList[i] = mapData[i];
    }

    mapList = mapList.filter(function(item) {
      return item.name !== "" && item.legs.length !== 0;
    });
  }

  localStorage.setItem('mapList', JSON.stringify(mapList));
  
  return mapList;
};

const lockMapList = (mapList, idx) => {

  let legsLength = Object.values(mapList[idx].legs).length;
  let legsCheck = 0;

  if (Object.values(mapList[idx].legs).length == 0 || mapList[idx].legs === undefined) {
    alert ("최소 1개의 다리를 설정해주세요");
  }
  else {
    for (var i = 0; i < legsLength; i++) {
      if (mapList[idx].legs[i] < 100) {
        alert ("다리 값은 최소 3개 이상 입력해주세요.");
        break;
      }
      else {legsCheck++;}
    }

    if (legsLength == legsCheck) {
      mapList[idx].mapLock = !mapList[idx].mapLock;

      if (!mapList[idx].mapLock) {
        mapList[idx].mapOrder = 0;
      }
      
      localStorage.setItem('mapList', JSON.stringify(mapList));
    }
  }
  
  return [...mapList];
};


const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomPlayers = (playerCount, data, userName) => {
  const playerSet = new Set();
  while (playerSet.size < playerCount) playerSet.add(data[getRandomNumber(0, 10)]);

  const players = Array.from(playerSet);
  
  if (userName !== undefined) {
    if (playerCount > Object.values(userName).length) {
      for (let i=0; i<playerCount; i++) {
        players[i].name = '';

        if (i < Object.values(userName).length) players[i].name = userName[i];
      }
    }
    else {
      for (let i=0; i<playerCount; i++) {
        players[i].name = userName[i];
      }
    }
  }

  return players;
};

const getRandomLegs = (playerCount, mapOrderFix, mapLoop) => {
  const legCounts = [];
  let legs = [];
  let rows = new Set();
  let column = 0;


  for (let i = 1; i < playerCount; i++) legCounts.push(getRandomNumber(3, 5));

  while (column < playerCount - 1) {

    if (rows.size === legCounts[column]) {
      legs.push([...rows].sort());
      rows = new Set();
      column++;
    }

    const num = getRandomNumber(0, 9);
    if (column < 1) rows.add(num);
    else {
      const isDuplicate = legs[column - 1].includes(num);
      if (!isDuplicate) rows.add(num);
    }
  }

  console.log(legs);

  let mapData = JSON.parse(localStorage.getItem("mapList"));
  let mapDataLength = 0;

  if (mapData === null) {mapDataLength = 0;}
  else {mapDataLength = Object.values(mapData).length;}
  
  let lockLegs = [];
  let lockCount = 0;

  if (mapDataLength != 0) {
    if (!mapOrderFix) {
      for (let i = 0; i < mapDataLength; i++) {
    
        let arrLegs = [];
        let arrLegsL = [];
  
        if (mapData[i].mapLock == true) {
  
          let legsData = mapData[i].legs;
          let legsDataLength = Object.values(legsData).length;
  
          if (legsDataLength != 0) {
            for (let j = 0; j < legsDataLength; j++) {
              arrLegs = Array.from(legsData[j]);
  
              for (let k = 0; k  < arrLegs.length; k++) {
                arrLegs[k] = Number(arrLegs[k]);
              }
  
              arrLegsL[j] = arrLegs;
            }
            
            lockLegs[lockCount] = arrLegsL;
          }
          
          lockCount++;
        }
      }

      lockLegs = lockLegs.filter(function(element){
        return element.length == playerCount - 1;
      });

      console.log(lockLegs);
  
      if (lockLegs.length == 1) {
        if (lockLegs[0] === undefined) {return false;}
        else if (lockLegs[0].length == playerCount - 1) {legs = lockLegs[0];}
      }
      else if (lockLegs.length > 1) {
        let locknum = getRandomNumber(0, lockLegs.length-1);

        console.log("locknum : "+locknum);
          
        legs = lockLegs[locknum];
      }
    }

    else if (mapOrderFix) {
      for (let i = 0; i < mapDataLength; i++) {
    
        let arrLegs = [];
        let arrLegsL = [];
  
        if (mapData[i].mapLock == true && mapData[i].mapOrder != 0) {
  
          let legsData = mapData[i].legs;
          let legsDataLength = Object.values(legsData).length;
  
          if (legsDataLength != 0) {
            for (let j = 0; j < legsDataLength; j++) {
              arrLegs = Array.from(legsData[j]);
  
              for (let k = 0; k  < arrLegs.length; k++) {
                arrLegs[k] = Number(arrLegs[k]);
              }
  
              arrLegsL[j] = arrLegs;
            }
            
            lockLegs[mapData[i].mapOrder-1] = arrLegsL;
          }
          
          lockCount++;
        }
      }

      lockLegs = lockLegs.filter(function(element){
        return element.length == playerCount - 1;
      });
  
      if (lockLegs.length > mapLoop) {
        legs = lockLegs[mapLoop];
      }
    }
  }
  console.log(legs);

  return legs;
};

export { 
  resetCase, setUserName,
  addUserList, getUserList,
  addMapList, inputMapListName,
  addMapListLegs, inputMapListLegs, lockMapList, saveMapList,
  removeMapList, getMapList, inputMapListOrder,
  getRandomLegs, getRandomPlayers };
