import Nav from 'react-bootstrap/Nav'
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'

function NavBar({
    currentUser,
    onLogOut
}) {

    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(() => onLogOut())
    }

    return (
        <Nav
            className="nav"
            activeKey="/"
            bg="light" 
            expand="lg"
        >
            <span className="nav">
                <div>
                    <Nav.Item>
                        <Button href="/">Home</Button>
                    </Nav.Item>
                </div>

                <div>
                    <Nav.Item>
                        <Button href="/experiences">Experiences</Button>
                    </Nav.Item>
                </div>
                <div>
                    <Nav.Item>
                        <Button href="/destinations">Destinations</Button>
                    </Nav.Item>
                </div>
            {currentUser ?
                <>
                    <div>    
                        <Nav.Item>
                            <Button href="/users">Travelers</Button>
                        </Nav.Item>
                    </div>
                    <div>
                        <Nav.Item>
                            <Button href="/experienceform">Post</Button>
                        </Nav.Item>
                    </div>
                    <div>
                        <Nav.Item>
                            <Button href="/login" onClick={handleLogOut}>Log Out</Button>
                        </Nav.Item>
                    </div>
                </>
            :
                <>
                    <div>
                        <Nav.Item>
                            <Button href="/login">Log In</Button>
                        </Nav.Item>
                    </div>
                    <div>
                        <Nav.Item>
                            <Button href="/register">Register</Button>
                        </Nav.Item>
                    </div>
                </>
            }
                <div>
                    <Nav.Item>
                        <Button href="/about">About</Button>
                    </Nav.Item>
                </div>

            { currentUser ? <Nav.Item className="username">✅ {currentUser.username}</Nav.Item> : null }
            </span>
        </Nav>
        
    )
}

export default NavBar