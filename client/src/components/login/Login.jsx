
import React, { useState, useEffect } from 'react';

export default function LoginForm() {
  const [loginInfo, setLoginInfo] = useState(null);

  useEffect(() => {
    async function fetchLoginInfo() {
      // Replace 'http://example.com/login' with the URL of your API endpoint
      const response = await fetch('signup');
      const data = await response.json();
      setLoginInfo(data);
    }
    fetchLoginInfo();
  }, []);

  if (!loginInfo) {
    return <p>Loading login information...</p>;
  }

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={loginInfo.username} />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={loginInfo.password} />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}