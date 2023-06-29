import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="d-flex justify-content-between">
            <button className="btn btn-dark">⇆</button>
            <Link className="btn btn-dark" to="/Login">Login</Link>
        </div>
    )
}

export default Nav