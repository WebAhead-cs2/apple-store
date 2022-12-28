import React from "react";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState();

  // const login = () => {
  // fetch request here
  // }

  return (
    <form>
      <label for="email">Email</label>
      <input
        type="email"
        placeholder="youremail@gmail.com"
        id="email"
        name="email"
      />
      <label for="password">Password</label>
      <input
        type="password"
        placeholder="your password ..."
        id="password"
        name="password"
      />
      <button>log in</button>
    </form>
  );
}
