import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function UsersCard({
    user
}) {

    return (
        <div>
            <div to={`/users/${user.id}`}>
                <Card>
                    <h4>{user.username}</h4>
                    <div>
                        <p>{user.location}</p>
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

export default UsersCard