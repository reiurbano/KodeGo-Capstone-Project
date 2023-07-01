import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <nav id="sidebar">
            <ul className="nav flex-column">
                <li className="nav-item sticky-top">
                    <Link to="/" id="logo" className="nav-link">
                        <div className="row align-items-center">
                            <img className="col-2 nav-logo" src="/tail.png" />
                            <span className="col sidebar">
                                <img className="nav-logo" src="/logo.png" />
                            </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <div className="row align-items-center">
                            <FontAwesomeIcon className="col-2" icon={faScroll} />
                            <span className="col sidebar py-2">
                                Combat Cards
                            </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/abnormalities" className="nav-link">
                        <div className="row align-items-center">
                            <FontAwesomeIcon className="col-2" icon={faGhost} />
                            <span className="col sidebar py-2">
                                Abnormalities
                            </span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/decks" className="nav-link">
                        <div className="row align-items-center">
                            <FontAwesomeIcon className="col-2" icon={faBookOpen} />
                            <span className="col sidebar py-2">
                                Decks
                            </span>
                        </div>
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