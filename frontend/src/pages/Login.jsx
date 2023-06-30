import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="mx-5 mt-5 py-3 border rounded" id="login">
            <h1 className="mx-5 my-2">Login</h1><hr></hr>
            <form id="loginForm" className="mt-3 mx-5">
                <div className="row mt-2 justify-content-between">
                    <div className="col-md-4">
                        <label for="email" className="form-label">Email:</label>
                        <input id="email" className="form-control" type="email" required />
                    </div>
                    <div className="col-md-4">
                        <label for="password" className="form-label">Password:</label>
                        <input id="password" className="form-control" type="password" required />
                    </div>
                    <div className="col-md-2 align-self-end">
                        <button className="btn btn-primary mt-3 w-100">Login</button>
                    </div>
                    <div className="col-md-4 py-2">
                        <Link to="/register" className="p-2">Don't have an account?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login