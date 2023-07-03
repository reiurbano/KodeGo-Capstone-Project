import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { SessionContext } from './Contexts'
import { Link } from 'react-router-dom'
import CheckSess from './CheckSess'

function Nav() {
    const session = useContext(SessionContext);

    useEffect(() => {
        CheckSess(session);
    }, [session.session])

    return (
        <div id="topbar" className="d-flex justify-content-between sticky-top">
            <button className="btn top-button px-3">⇆</button>
            <Link className={`btn top-button my-auto px-3 py-1 ${(session.session) ? 'btn-light text-black' : ''}`} to={`${(session.session) ? '/home' : '/login'}`}>
                <FontAwesomeIcon icon={faUser} /> {(session.session) ? "Home" : "Login"}
            </Link>
        </div>
    )
}

export default Nav