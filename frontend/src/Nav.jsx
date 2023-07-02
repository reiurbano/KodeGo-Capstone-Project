import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { EndpointContext, SessionContext } from './Contexts'

function Nav() {
    const endpoint = useContext(EndpointContext);
    const session = useContext(SessionContext);

    const checkSess = async () => {
        const response = await fetch(`${endpoint}login.php`, {
            credentials: 'include',
            method: 'GET'
        })

        const data = await response.json();

        if (data.success && data.valid != session.session && data.valid != true) {
            session.updateSession(data.valid)
        }
    }

    useEffect(() => {
        checkSess();
    }, [session.session])

    return (
        <div id="topbar" className="d-flex justify-content-between sticky-top">
            <button className="btn top-button px-3">⇆</button>
            <Link className="btn top-button my-auto px-3" to={`${(session.session) ? '/home' : '/login'}`}>
                <FontAwesomeIcon icon={faUser} /> {(session.session) ? "Home" : "Login"}
            </Link>
        </div>
    )
}

export default Nav