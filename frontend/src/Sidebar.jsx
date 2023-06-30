import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <nav id="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item sticky-top">
                    <Link to="/" id="logo" className="nav-link row">
                        <img className="col-2 nav-logo" src="/tail.png" />
                        <span className="col sidebar">
                            <img className="nav-logo" src="/logo.png" />
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link row">
                        <FontAwesomeIcon className="col-2" icon={faScroll} />
                        <span className="col sidebar">
                            Combat Cards
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/abnormalities" className="nav-link row">
                        <FontAwesomeIcon className="col-2" icon={faGhost} />
                        <span className="col sidebar">
                            Abnormalities
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/decks" className="nav-link row">
                        <FontAwesomeIcon className="col-2" icon={faBookOpen} />
                        <span className="col sidebar">
                            Decks
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <div id="bg-text"> </div>
                </li>
                <li className="nav-item">
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar