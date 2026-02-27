import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";

export default function UserCard(props) {
  const { username, name, avatar_url } = props.userData;
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  function handleClick() {
    setLoggedInUser(props.userData);
  }

  return (
    <>
      <div className="userCard" onClick={handleClick}>
        <h3>{username}</h3>
        <img src={avatar_url} alt="" />
        <h5>{name}</h5>
      </div>
    </>
  );
}
