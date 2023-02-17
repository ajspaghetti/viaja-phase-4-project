import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ExperienceCard({
    experience,
}) {

        return (
            <div>
                <div to={`/experiences/${experience.id}`}>
                    <Card>
                        <h4>{experience.title}</h4>
                        <div>
                            <p>{experience.activity}</p>
                            <p>{experience.description}</p>
                            <p>{experience.rating}</p>
                            <p>{experience.destination.place_name}</p>
                            <p>{experience.user.username}</p>
                            <div>
                            <Button>Update</Button>
                            <Button>Delete</Button>
                            </div>
                        </div>
                    </Card>
                    <br/>
                </div>
                
            </div>
        )
    
}

export default ExperienceCard