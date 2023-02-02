import React, { useEffect, useState } from "react";

type User = {
  id: string;
  fullName: string;
  email: string;
  username: string;
};

const UsersList = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const data = await fetch("http://127.0.0.1:3001/users");
      setUsers(data);
    };

    loadUsers();
  });

  if (loading) return <h1>Loading</h1>;

  return (
    <ul>
      {users.map(user => (
        <li>{user.fullName}</li>
      ))}
    </ul>
  );
};

export { UsersList };
