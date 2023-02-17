import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Register({
    onLogIn
}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        const registerForm = {
            username: username,
            password: password,
            location: location
        }
        //console.log(registerForm)
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(registerForm)
        })
        .then(r => {
            if(r.ok) {
                r.json()
                .then(newUser => onLogIn(newUser))
                history.push('/')
            }
        })
        setUsername("")
        setPassword("")
        setLocation("")
    }

    return (
        <div>
            <br/>
            <h1>Register with Viaja</h1>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                    <Form.Control
                        required
                        size="lg"
                        type="text"
                        name="username"
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
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>
                    <Form.Control
                        required
                        size="lg"
                        type="text"
                        name="location"
                        placeholder="current location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Form.Group>
                <br/>
                <Button type="submit">Create Account</Button>
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
    )
}

export default Register