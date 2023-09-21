"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const UsersClientSide = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <h1 style={{ margin: "40px 0 10px" }}>Users Client Side</h1>
      {users.map((user) => (
        <p key={user.id} style={{ marginBottom: "10px", fontSize: "18px" }}>
          {user.name}{" "}
          <Link
            href={`users/${user.id}`}
            style={{ textDecoration: "underLine" }}
          >
            Details
          </Link>
        </p>
      ))}
    </div>
  );
};

export default UsersClientSide;
