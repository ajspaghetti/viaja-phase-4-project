import { useState, useEffect } from 'react'
import ExperienceCard from './ExperienceCard'

function ExperienceContainer() {

    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        fetch('/experiences')
        .then(r => r.json())
        .then(experiences => setExperiences(experiences))
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
                    {experiences.length > 0 ? 
                        experiences.map(experience =>
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />) : null }
                    
                </div>

            </div>
            </div>
        </div>
    )
}

export default ExperienceContainer