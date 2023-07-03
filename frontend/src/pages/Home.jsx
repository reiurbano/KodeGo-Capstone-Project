import { useContext } from 'react'
import { useNavigate, Link, Outlet } from 'react-router-dom'
import { endpoint, SessionContext } from '../Contexts'

function Home() {
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
            <div className="mx-5 mt-5 py-3 border rounded" id="search">
                <div className="d-flex mx-5 my-2">
                    <h1 className="flex-fill">Homepage</h1>
                    <button className="btn btn-danger px-2 py-1 align-self-center" onClick={handleLogout}>Logout</button>
                </div>
                <hr />
            </div>
            <div className="mx-5 mt-5 py-3">
                <ul className="nav nav-underline">
                    <li className="">
                        <Link className="nav-link" to="/home/yourdecks">Saved Decks</Link>
                    </li>
                    <li className="">
                        <Link className="nav-link" to="/home/deckbuilder">Make Your Own Deck</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Home