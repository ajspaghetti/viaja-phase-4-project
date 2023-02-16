import React from "react"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"

function NavBar({
    setUser,
    user
}) {
    const history = useHistory()

    function handleLogoutClick(){
        fetch("/logout", {
            method: "DELETE"
        }).then((r => {
            if (r.ok){
                setUser(null)
                history.push("/")
            }
        }))
    }


    return (
        user ? (<nav>
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/experienceform">
                Post Experience
            </NavLink>
            <NavLink exact to="/experiencecontainer">
                Experiences
            </NavLink>
            <NavLink exact to="/destinationcontainer">
                Destinations
            </NavLink>
            <NavLink exact to="/activitycontainer">
                Activities
            </NavLink>
            <button onClick={handleLogoutClick}>Logout</button>
        </nav> ) : 
        (<nav>
            <NavLink exact to="/">
                Welcome
            </NavLink>
            <NavLink exact to="/login">
                Login
            </NavLink>
            <NavLink exact to="/registerform">
                Register
            </NavLink>
        </nav> )
    )
}

export default NavBar