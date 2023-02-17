import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function ExperienceForm({
    
    onSubmitNewExperience,
    currentUser,
    destinations
}) {

    const [title, setTitle] = useState("")
    const [activity, setActivity] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(parseInt(""))
    const [destinationId, setDestinationId] = useState(0)
    const [userId, setUserId] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        const experienceInput ={
            title: title,
            activity: activity,
            description: description,
            rating: rating,
            destination_id: destinationId,
            user_id: currentUser.id
        }
        fetch('/experiences', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(experienceInput)
        })
            .then(r => {
                if(r.ok) {
                    r.json()
                    .then(newExperience => onSubmitNewExperience(newExperience))
                }
                alert('Thanks for posting!')
            })
        setTitle("")
        setActivity("")
        setDescription("")
        setRating(0)
        setDestinationId(0)
        setUserId(currentUser.id)
    }

    console.log(currentUser.id)
    console.log(destinations)

    return (
        <div>
            <br/>
            <h1>Post an Experience</h1>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        required
                        type="text"
                        name="title"
                        placeholder="title you'd like to give your experience"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br/>
                    <Form.Control
                        required
                        type="text"
                        name="activity"
                        placeholder="activity participated-in"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                    />
                    <br/>
                    <Form.Control
                        required
                        type="text"
                        name="description"
                        placeholder="enter a brief description of the experience"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br/>
                    <p>--enter a rating between 1 and 5</p>
                    <Form.Control
                        required
                        type="text"
                        name="rating"
                        label="enter a rating between 1 and 5"
                        title="enter a rating between 1 and 5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <br/>
                    <div>
                        <select
                            name="destination"
                            onChange={(e)=> setDestinationId(e.target.value)}
                        >
                        <option>
                            Select Destination
                        </option>
                        {destinations.map((destination) => (
                            <option 
                                key={destination.id} 
                                value={destination.id} 
                                >
                                    {destination.place_name}
                            </option>
                        ))
                        }
                        </select>
                    </div>
                    <br/>
                    <Button type="submit">Post Experience</Button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link>
                            <Button to="/experiences">Go see your experiences</Button>
                    </Link>

                </Form.Group>
            </Form>
            <br/>
            <div>
                <Link to='/'>
                    <Button>Home</Button>
                </Link>
            </div>
            
            

        </div>
    )
}

export default ExperienceForm