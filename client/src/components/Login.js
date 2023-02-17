import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login({ onLogIn }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    console.log(user)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((r) => r.json())
      .then((loggedInUser) => {
        onLogIn(loggedInUser);
        history.push("/");
      });
      
    setUsername("");
    setPassword("");
  }

  return (
    <div>
        <br/>
      <h1>Log In</h1>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            required
            size="lg"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <Form.Control
            required
            size="lg"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
        </Form.Group>
        <Button type="submit">Log In</Button>
        <br/>
        <br/>
        <div>
          New to Viaja?
          <br/>
          <Link exact to="/register">
            Register here
          </Link>
        </div>
      </Form>
      <br/>
      <br/>
      <br/>
        <div>
            <Link to='/'>
                <Button>Home</Button>
            </Link>
        </div>
    </div>
  );
}

export default Login