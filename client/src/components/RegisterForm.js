import React, { useState } from "react";
import { Button, Input, FormField, Label, Textarea} from "react"
import { useHistory } from "react-router-dom";

function RegisterForm({ 
        user, 
        setUser 
    }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [bio, setBio] = useState("");

    // const [errors, setErrors] = useState([]);
    const history = useHistory()

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

    function handleImageUrlChange(e){
        setImageUrl(e.target.value)
    }

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handleBioChange(e){
        setBio(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password,
            email,
            imageUrl,
            bio
        }

        fetch("registerform",{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(r => {
            if(r.ok){
                r.json().then(user => {
                    setUser(user)
                    history.push(`/users/${user.id}`)
                })
            } else {
                r.json().then(console.log)
                    // setErrors(Object.entries(errors))
            }
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Create a New Account</h1>
                <FormField>
                    <Label htmlFor="username">Create Username</Label>
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </FormField>
                <FormField>
                    <Label htmlFor="password">Create Password</Label>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        autoComplete="current-password"
                    />
                </FormField>
                <FormField>
                    <Label htmlFor="email">Create Username</Label>
                    <Input
                        type="text"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormField>
                <FormField>
                    <Label htmlFor="imageUrl">Link Your Profile Picture</Label>
                    <Input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                    />
                </FormField>
                <FormField>
                    <Label htmlFor="bio">Enter a Brief Bio</Label>
                    <Textarea
                        rows="5"
                        id="bio"
                        value={bio}
                        onChange={handleBioChange}
                    />
                </FormField>
                <FormField>
                    <Button type="submit">"Sign Up"</Button>
                </FormField>
            </form>
        </div>
    )
}

export default RegisterForm