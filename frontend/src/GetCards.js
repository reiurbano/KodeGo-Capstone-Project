import { endpoint } from './Contexts';

const GetCards = async (list) => {
    const response = await fetch(`${endpoint}getcards.php`, {
        credentials: 'include',
        method: 'GET'
    })

    const data = await response.json();

    list.updateList(data);
}

// const GetDeck = async (deck) => {
//     const response = await fetch(`${endpoint}getcards.php?id=${}`, {
//         credentials: 'include',
//         method: 'GET'
//     })

//     const data = await response.json();

//     deck.updateDeck(data);
// }

export default GetCards