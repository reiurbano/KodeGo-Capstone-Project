import { Outlet } from 'react-router-dom'
import Nav from '../Nav.jsx'

function Layout() {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    )
}

export default Layout