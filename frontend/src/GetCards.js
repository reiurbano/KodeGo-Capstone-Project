import { endpoint } from './Contexts';

const GetCards = async (list) => {
    const response = await fetch(`${endpoint}getcards.php`, {
        credentials: 'include',
        method: 'GET'
    })

    const data = await response.json();

    list.updateList(data);
}

export default GetCards