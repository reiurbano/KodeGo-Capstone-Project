import { ListContext, EndpointContext } from '../Contexts.js'
import { useContext, useEffect } from 'react'
import ListCards from '../ListCards.jsx'

function CombatCards() {
    const endpoint = useContext(EndpointContext);
    const list = useContext(ListContext);
    const temp = list.list;

    const getCards = async () => {
        const response = await fetch(`${endpoint}getcards.php`, {
            credentials: 'include',
            method: 'GET'
        })

        const data = await response.json();

        if (list.list != data || temp != list.list || temp != data) {
            list.updateList(data);
        }
    }

    useEffect(() => {
        getCards();
        console.log(temp);
    }, [list.list])

    return (
        <div>
            <div className="mx-5 mt-5 py-3 border rounded" id="search">
                <h1 className="mx-5 my-2">Combat Cards</h1><hr />
                <form className="mx-5 mt-3" id="page-search">
                    <div className="row mt-2">
                        <div className="col-lg-5 my-2 mx-2">
                            <input className="form-control p-1" placeholder="Search by name" />
                        </div>
                        <div className="col-lg-5 my-2 mx-2">
                            <div className="input-group">
                                <input className="form-control p-1" placeholder="Search by effect keywords" />
                                <button className="btn btn-dark border py-1 px-2">Search</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ListCards list={temp} />
        </div>
    )
}

export default CombatCards