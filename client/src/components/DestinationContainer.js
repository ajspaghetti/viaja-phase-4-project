import { useState, useEffect } from 'react'
import DestinationCard from './DestinationCard'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function DestinationContainer() {

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch('/destinations')
        .then(r => r.json())
        .then(destinations => setDestinations(destinations))
    }, [])
    return (
        <div>
            <div>
            <br/>
            <br/>
            <h1>Experiences</h1>
            <br/>
            <div className="container-fluid">
                <div className="row">
                    {destinations.length > 0 ? 
                        destinations.map(destination =>
                            <DestinationCard
                                key={destination.id}
                                destination={destination}
                            />) : null }
                    
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

export default DestinationContainer