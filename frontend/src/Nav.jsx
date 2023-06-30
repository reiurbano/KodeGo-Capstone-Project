import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div id="topbar" className="d-flex justify-content-between sticky-top">
            <button className="btn top-button px-3">⇆</button>
            <Link className="btn top-button my-auto px-3" to="/login">
                <FontAwesomeIcon icon={faUser} /> Login
            </Link>
        </div>
    )
}

export default Nav