import React, { useContext } from "react";
import { Context } from "Context";
import UserListCon from "Components/UserListCon";

const UserListContainer = () => {
  const { state, addList, inputList, saveList } = useContext(Context);
  const { userListCount, userList, userResults } = state;

  return (
    <UserListCon
        userListCount={userListCount}
        userList={userList}
        userResults={userResults}
        addList={addList}
        inputList={inputList}
        saveList={saveList}
    />
  );
};

export default React.memo(UserListContainer);
