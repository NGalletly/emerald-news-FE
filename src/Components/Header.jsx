import { Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";

export default function Header() {
  const { loggedInUser } = useContext(UserContext);

  console.log(loggedInUser);

  return (
    <header>
      <h1>Neville's News App</h1>

      <div className="userBox">
        <Link to="/Users">
          <p>
            Logged in as: <br></br>
            {loggedInUser.userName}
          </p>
          <strong>
            <img src={loggedInUser.avatar_url} alt="" />
          </strong>
        </Link>
      </div>
    </header>
  );
}
