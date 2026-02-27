import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Header() {
  const [userState, setUserState] = useState({ name: "default User" });

  return (
    <header>
      <h1>Neville's News App</h1>

      <div className="userBox">
        <Link to="/Users">
          <p>
            Logged in as: <br></br>
            {userState.name}
          </p>
        </Link>
      </div>
    </header>
  );
}
