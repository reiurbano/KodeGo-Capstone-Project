import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="mx-5 mt-5 py-3 border rounded" id="login">
            <h1 className="mx-5 my-2">Login</h1><hr></hr>
            <form className="mt-3 mx-5" id="loginForm">
                <div className="row mt-2">
                    <div className="col-lg-5 my-2 mx-2">
                        <label for="email" className="form-label">Email:</label>
                        <input id="email" className="form-control p-1" type="email" required />
                    </div>
                    <div className="col-lg-5 my-2 mx-2">
                        <label for="password" className="form-label">Password:</label>
                        <input id="password" className="form-control p-1" type="password" required />
                    </div>
                    <div className="col-lg-1 my-2 mx-auto align-self-end">
                        <button className="btn btn-dark border py-1 mx-2 w-100">Login</button>
                    </div>
                </div>
            </form>
            <div className="mx-5 my-2">
                <Link to="/register" className="px-2 py-2">Don't have an account?</Link>
            </div>
        </div>
    )
}

export default Login