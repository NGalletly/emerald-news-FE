import { Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";

export default function Header() {
  const { loggedInUser } = useContext(UserContext);

  // console.log(loggedInUser);

  return (
    <header>
      <h1>Emerald News</h1>

      <div className="userBox">
        <Link to="/Users">
          <p>
            Logged in as: <br></br>
            {loggedInUser.username}
          </p>
          <strong>
            <img src={loggedInUser.avatar_url} alt="" />
          </strong>
        </Link>
      </div>
    </header>
  );
}
