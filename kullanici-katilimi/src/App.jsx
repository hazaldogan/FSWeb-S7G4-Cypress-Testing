import { useState } from "react";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <>
      <h4>Users</h4>
      <ul>
        {users.map((user, index) => {
          <li key={index}>{user.email}</li>;
        })}
      </ul>
      <Form addUser={addUser} />
    </>
  );
}

export default App;
