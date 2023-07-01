import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register({ endpoint }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleRegister = async (evt) => {
        evt.preventDefault();

        if (password == confirmpassword) {
            const response = await fetch(`${endpoint}register.php`, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            })

            const data = await response.json();

            if (data.success) {
                alert(data.message);
                window.location.href="/";
            } else {
                alert(data.message);
            }
        } else {
            alert("Passwords do not match");
        }
    }

    return (
        <div className="mx-5 mt-5 py-3 border rounded" id="register">
            <h1 className="mx-5 my-2">Register</h1><hr />
            <form className="mt-3 mx-5" id="registrationForm" onSubmit={handleRegister}>
                <div className="row mt-2">
                    <div className="col-lg-5 mx-2 my-2">
                        <p>Username:</p>
                        <input id="username" className="form-control p-1" type="text"
                            onChange={(i) => setUsername(i.target.value)} required />
                    </div>
                    <div className="col-lg-5 mx-2 my-2">
                        <p>Email:</p>
                        <input id="email" className="form-control p-1" type="email"
                            onChange={(i) => setEmail(i.target.value)} required />
                    </div>
                    <div className="col-lg-4 mx-2 my-2">
                        <p>Password:</p>
                        <input id="password" className="form-control p-1" type="password"
                            onChange={(i) => setPassword(i.target.value)} required />
                    </div>
                    <div className="col-lg-4 mx-2 my-2">
                        <p>Confirm Password:</p>
                        <input id="confirm_password" className="form-control p-1" type="password"
                            onChange={(i) => setConfirmPassword(i.target.value)} required />
                    </div>
                    <div className="col-lg-2 my-2 me-auto align-self-end">
                        <button className="btn btn-dark border py-1 mx-2 w-100" type="submit">Register</button>
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