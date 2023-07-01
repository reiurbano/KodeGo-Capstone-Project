import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login({ endpoint }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (evt) => {
        evt.preventDefault();

        const response = await fetch(`${endpoint}login.php`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
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
    }

    return (
        <div className="mx-5 mt-5 py-3 border rounded" id="login">
            <h1 className="mx-5 my-2">Login</h1><hr />
            <form className="mt-3 mx-5" id="loginForm" onSubmit={handleLogin}>
                <div className="row mt-2">
                    <div className="col-lg-5 my-2 mx-2">
                        <p>Email:</p>
                        <input id="email" className="form-control p-1" type="email" 
                        onChange={(i) => setEmail(i.target.value)} required />
                    </div>
                    <div className="col-lg-5 my-2 mx-2">
                        <p>Password:</p>
                        <input id="password" className="form-control p-1" type="password" 
                        onChange={(i) => setPassword(i.target.value)} required />
                    </div>
                    <div className="col-lg-1 my-2 mx-auto align-self-end">
                        <button className="btn btn-dark border py-1 mx-2 w-100" type="submit">Login</button>
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