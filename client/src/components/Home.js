import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Home({
    currentUser
}) {


    return(
        <div className='homepage'>
            <div className='homepage-text'>
            <br/>
            <br/>
                <h1>Viaja</h1>
                <br/>
                <br/>
                <h4>Your Personal Travel Bulletin</h4>
                <br/>
                <br/>
                <p>{currentUser ? `Logged in as ${currentUser.username}` : 'Your digital passport stamp-book'}</p>
                <br />
                <span className="home-menu">
                    {currentUser ?
                        <span>
                            <div>
                                <Link to='/experiences'>
                                    <Button>See experiences stamped by other travelers</Button>
                                </Link>
                                
                            </div>
                            <br/>
                            <div>
                                <Link to='/experienceform'>
                                    <Button>Post an experience</Button>
                                </Link>
                            </div>
                            <br/>
                            <div>
                                <Link to='/destinations'>
                                    <Button>Find your next destination</Button>
                                </Link>
                            </div>
                            <br/>
                            <div>
                                <Link to='/destinationform'>
                                    <Button>Enter a new destination in our database</Button>
                                </Link>
                            </div>
                            <br/>
                            <div>
                                <Link to='/users'>
                                    <Button>Browse our user profiles</Button>
                                </Link>
                            </div>
                        </span>
                        :
                        <Link to='/login'>
                            <Button>Login or Register</Button>
                        </Link>
                    }
                </span>
            </div>
        </div>
    )
}

export default Home