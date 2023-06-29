import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div className="d-flex justify-content-between">
            <button className="btn btn-dark">⇆</button>
            <Link className="btn btn-dark" to="/login">
                <FontAwesomeIcon icon={faUser} /> Login
            </Link>
        </div>
    )
}

export default Nav