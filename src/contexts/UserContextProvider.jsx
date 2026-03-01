import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "No User Selected",
    avatar_url:
      "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_640.png",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
