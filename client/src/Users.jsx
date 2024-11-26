import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  });
  const handledelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteuser/" + id)
      .then((result) => console.log(result), window.location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>users</h1>
      <a className="btn btn-dark" href="/create">
        create
      </a>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handledelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
