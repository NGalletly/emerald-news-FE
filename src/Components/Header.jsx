import { Link } from "react-router";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";

export default function Header() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <header>
      <h1>Emerald News</h1>

      {/* Desktop Navigation - hidden on mobile */}
      <nav className="desktop-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>

      <div className="userBox">
        <Link to="/Users">
          <img src={loggedInUser.avatar_url} alt="" />
          <p>
            Logged in as: <br />
            {loggedInUser.username}
          </p>
        </Link>
      </div>
    </header>
  );
}
