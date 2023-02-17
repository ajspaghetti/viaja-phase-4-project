import { useEffect } from 'react'
import { useState } from 'react'
import UsersCard from './UsersCard'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function UsersContainer() {

    const [travelers, setTravelers] = useState([])

    useEffect(() => {
        fetch('/users')
        .then(r => r.json())
        .then(users => setTravelers(users))
    }, [])

    return (
        <div>
        <div>
            <br/>
            <br/>
            <h1>Travelers</h1>
            <br/>
            <div className="container-fluid">
                <div className="row">
                    {travelers.length > 0 ? 
                        travelers.map(user => 
                            <UsersCard 
                                key={user.id} 
                                user={user}
                            />) : 
                                null
                    }
                </div>
            </div>
        </div>
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

export default UsersContainer