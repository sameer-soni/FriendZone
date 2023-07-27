import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvier = ({ children, socket }) => {
  const [loggedUser, setLoggedUser] = useState(() => {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : undefined;
  });

  const [friendReq_response, setFriendReq_response] = useState(false); //for re-fetching friend request
  const [fetchPostAgain, setFetchPostAgain] = useState(false); //for re-fetching friend request
  const [noti, setNoti] = useState([]);

  return (
    <MyContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        socket,
        friendReq_response,
        setFriendReq_response,
        fetchPostAgain,
        setFetchPostAgain,
        noti,
        setNoti,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvier };
