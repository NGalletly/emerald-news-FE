import { useState } from "react";

export default function UserCard(props) {
  const { username, name, avatar_url } = props.userData;
  console.log(username, name, avatar_url);
  return (
    <>
      <div className="userCard">
        <h3>{username}</h3>
        <img src={avatar_url} alt="" />
        <h5>{name}</h5>
      </div>
    </>
  );
}
