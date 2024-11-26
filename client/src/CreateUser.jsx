import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const Navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", { name, email, age })
      .then((result) => console.log(result), Navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>create users</h1>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /> <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button className="btn btn-success">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
