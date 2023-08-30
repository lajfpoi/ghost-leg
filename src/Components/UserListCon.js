/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../app.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus } from "@fortawesome/free-solid-svg-icons";

const UserListBox = ({ userList, addList, inputList, saveList }) => {

  return (
    <div class="List_wrap">
      <ul>
        {Object.values(userList).map((list, idx) => {
            return (
              <li key={idx}>
                <input
                  type="text"
                  class="ListInput"
                  value={userList[idx]}
                  onChange={
                    (e) => {
                      inputList(e, idx);
                    }
                  }
                />
              </li>
            );
        })}
      </ul>
      
      <button type="button" class="btn_addList" onClick={addList}><FontAwesomeIcon icon={faPlus} /></button>
      <button type="button" class="btn_addList" onClick={saveList}>명단 저장</button>
    </div>
  )
}

const UserListCon = ({ userListCount, userList, addList, userResults, inputList, saveList }) => {
  
  const [isVisible, setIsVisible] = useState(false);
  const toggleList = () => setIsVisible(!isVisible);

  return (
    <>
        <Button aria-label="명단 넣기">
            <FontAwesomeIcon icon={faList} onClick={toggleList} />
        </Button>
        {isVisible && <UserListBox 
          userListCount={userListCount}
          userList={userList}
          addList={addList}
          userResults={userResults}
          inputList={inputList}
          saveList={saveList}
        />}
    </>
  );
};

export default React.memo(UserListCon);

const Button = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  background: none;
  color: #fff;
  font-size: 3rem;

  @media ${({ theme }) => theme.mobile} {
    width: 3rem;
    height: 3rem;
    top: 1.5rem;
    right: 1.5rem;
  }
`;