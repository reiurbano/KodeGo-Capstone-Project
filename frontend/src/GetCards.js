// import { EndpointContext, ListContext } from './Contexts.js';
// import { useContext } from 'react';

// function GetCards() {
//     const endpoint = useContext(EndpointContext);
//     const list = useContext(ListContext);

//     const getCards = async () => {
//         const response = await fetch(`${endpoint}getcards.php`, {
//             credentials: 'include',
//             method: 'GET'
//         })

//         const data = await response.json();

//         list.updateList(data);
//     }

//     return getCards;
// }

// export default GetCards