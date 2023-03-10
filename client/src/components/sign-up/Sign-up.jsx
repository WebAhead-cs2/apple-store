import "./sign-up.css";
import React, { useState } from "react";

const SignUpForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [data, setData] = useState({name:"",email:"",password:""});
  const onChange = (key) => (e) => setData({ ...data, [key]: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.name, event.email, event.password);

    if (!data.name || !data.email || !data.password) {
      return alert("Please complete all fields");
    }
    
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = '/login';
        } else {
          alert(data.error);
        }
      })
      .catch((error) => {
        setError(error.message);
        throw new Error('some details are invalid');
      });
  };

  return (
    <div className="signUp">
      <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <label htmlFor="name">Name:</label><br/>
      <input  
        type="text"
        id="name"
        value={data.name}
        onChange={onChange("name")}
      /><br/>

      <label htmlFor="email">Email:</label><br/>
      <input
        type="email"
        id="email"
        value={data.email}
        onChange={onChange("email")}
      /><br/>

      <label htmlFor="password">Password:</label><br/>
      <input
        type="password"
        id="password"
        value={data.password}
        onChange={onChange("password")}
      /><br/><br/>

      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};

export default SignUpForm;
