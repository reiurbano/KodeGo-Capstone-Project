import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="mx-5 mt-5 py-3 border rounded" id="register">
            <h1 className="mx-5 my-2">Register</h1><hr></hr>
            <form className="mt-3 mx-5" id="registrationForm">
                <div className="row mt-2">
                    <div className="col-lg-5 mx-2 my-2">
                        <label for="username" className="form-label">Username:</label>
                        <input id="username" className="form-control p-1" type="text" required />
                    </div>
                    <div className="col-lg-5 mx-2 my-2">
                        <label for="email" className="form-label">Email:</label>
                        <input id="email" className="form-control p-1" type="email" required />
                    </div>
                    <div className="col-lg-4 mx-2 my-2">
                        <label for="password" className="form-label">Password:</label>
                        <input id="password" className="form-control p-1" type="password" required />
                    </div>
                    <div className="col-lg-4 mx-2 my-2">
                        <label for="confirm_password" className="form-label">Confirm Password:</label>
                        <input id="confirm_password" className="form-control p-1" type="password" required />
                    </div>
                    <div className="col-lg-2 my-2 me-auto align-self-end">
                        <button className="btn btn-dark border py-1 mx-2 w-100">Register</button>
                    </div>
                </div>
            </form>
            <div className="mx-5 my-2">
                <Link to="/login" className="px-2 py-2">Already have an account?</Link>
            </div>
        </div>
    )
}

export default Register