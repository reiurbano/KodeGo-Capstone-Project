import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="mx-5 mt-5 py-3 border rounded" id="register">
            <h1 className="mx-5 my-2">Register</h1><hr></hr>
            <form id="registrationForm" className="mt-3">
                <div className="row mt-2 mx-5 justify-content-between">
                    <div className="col-lg-5">
                        <label for="username" className="form-label">Username:</label>
                        <input id="username" className="form-control" type="text" required />
                    </div>
                    <div className="col-lg-5">
                        <label for="email" className="form-label">Email:</label>
                        <input id="email" className="form-control" type="email" required />
                    </div>
                </div>
                <div className="row mt-2 mx-5 justify-content-between">
                    <div className="col-md-3">
                        <label for="password" className="form-label">Password:</label>
                        <input id="password" className="form-control" type="password" required />
                    </div>
                    <div className="col-md-3">
                        <label for="confirm_password" className="form-label">Confirm Password:</label>
                        <input id="confirm_password" className="form-control" type="password" required />
                    </div>
                    <div className="col-md-4 mt-2">
                        <button className="btn btn-primary p-1 px-2 mt-2 mx-2">Submit</button>
                        <Link to="/login" className="align-bottom py-2">Already have an account?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register