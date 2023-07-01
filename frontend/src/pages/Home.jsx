import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { EndpointContext, SessionContext } from '../Contexts'

function Home() {
    const endpoint = useContext(EndpointContext);
    const session = useContext(SessionContext);

    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await fetch(`${endpoint}logout.php`, {
            credentials: 'include',
            method: 'POST'
        })

        const data = await response.json();

        if (data.success) {
            session.updateSession(data.valid);
            navigate('/');
        }
    }

    return (
        <div>
            <h1>Homepage</h1>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home