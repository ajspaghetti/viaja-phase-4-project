import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login({ 
  user,
  setUser 
}) {

  const [username, SetUsername] = useState("")
  const [password, SetPassword] = useState("")
  const [errors, setErrors] = useState([])
  const history = useHistory()

  function handleUsernameChange(e) {
    SetUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    SetPassword(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password,
    }

    //Logs in user
    fetch(`/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(user => {
          setUser(user)
          history.push("/")
        })
      } else {
        r.json().then(json => setErrors(json.errors))
      }
    })
    history.push(`/`)
  }

  return (
    <div className="form">
      <h2>Log In</h2>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => handleUsernameChange(e)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        />
        <br/>
        <br/>
        <input type="submit" value="Enter" />
      </form>
      <h3>Register here if you don't have an account</h3>
      <Link exact to="/registerform">
        Register
      </Link>
    </div>
  );
}

export default Login;
