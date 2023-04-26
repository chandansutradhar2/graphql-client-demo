import { LOGIN_USER } from "./queries";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { loading, error, data }] = useLazyQuery(LOGIN_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ variables: { email, password } });
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "50vw" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
