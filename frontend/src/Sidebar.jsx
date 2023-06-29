import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <nav>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <img className="nav-logo" src="/tail.png" />
                        <span className="sidebar">
                            <img className="nav-logo" src="/logo.png" />
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <FontAwesomeIcon icon={faScroll} />
                        <span className="sidebar">
                            Combat Cards
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/abnormalities" className="nav-link">
                        <FontAwesomeIcon icon={faGhost} />
                        <span className="sidebar">
                            Abnormalities
                        </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/decks" className="nav-link">
                        <FontAwesomeIcon icon={faBookOpen} />
                        <span className="sidebar">
                            Decks
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar