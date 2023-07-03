import { endpoint } from "./Contexts";

const CheckSess = async (sess) => {
    const response = await fetch(`${endpoint}login.php`, {
        credentials: 'include',
        method: 'GET'
    })

    const data = await response.json();

    if (data.success && data.valid != sess.session && data.valid != true) {
        sess.updateSession(data.valid)
    }
}

export default CheckSess