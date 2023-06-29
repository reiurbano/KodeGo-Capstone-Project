import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar.jsx'
import Nav from '../Nav.jsx'

function Layout() {
    return (
        <div>
            <header className="container-fluid bg-black">
                <img className="img-fluid" src="./head.png" />
            </header>
            <div className="d-flex justify-content-between">
                <Sidebar />
                <div className="flex-fill">
                    <Nav />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout