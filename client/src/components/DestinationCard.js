import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function DestinationCard({
    destination
}) {

    return (
        <div>
            <div>
                <div to={`/destinations/${destination.id}`}>
                    <Card>
                        <h4>{destination.place_name}</h4>
                        <div>
                            <p>{destination.city},</p>
                            <p>{destination.region}</p>
                            <p>{destination.country}</p>
                            <div>
                            <Button>Update</Button>
                            <Button>Delete</Button>
                            </div>
                        </div>
                    </Card>
                    <br/>
    
                </div>
                
            </div>
        </div>
    )
}

export default DestinationCard