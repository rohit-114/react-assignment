import React, { useState, useContext } from "react";
import ShowContext from "../ShowContext";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { pageData } = useContext(ShowContext);

  function handler(e) {
    e.preventDefault();
    localStorage.setItem(
      `${email}`,
      JSON.stringify({ email: email, name: name })
    );
    setEmail("");
    setName("");
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handler}>
        <h1 className="form-name">{pageData.name}</h1>
        <img className="form-image" src={pageData.image} alt="img" />
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
