import { useState, useEffect } from "react";
import { getUsers } from "../utils/getData";
import { useLoadingErrorHook } from "../hooks/useLoadingErrorHook";
import UserCard from "./UserCard";

export default function Users() {
  const { data, isLoading, error } = useLoadingErrorHook(getUsers);

  if (isLoading) {
    return <h1>Fetching user list...</h1>;
  }

  if (error) {
    return <h1>Sorry! Somethings gone awry. Please try again later.</h1>;
  }

  const users = data.users || [];

  return (
    <>
      <h1>Pick user to login:</h1>
      <section className="profileContainer">
        {users.map((user) => {
          return <UserCard key={user.username} userData={user} />;
        })}
      </section>
    </>
  );
}
