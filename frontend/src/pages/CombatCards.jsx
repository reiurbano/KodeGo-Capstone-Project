import { useContext, useEffect } from 'react'
import { ListContext } from '../Contexts.js'
import ListCards from '../ListCards.jsx'
import GetCards from '../GetCards.js'

function CombatCards() {
    const list = useContext(ListContext)

    useEffect(() => {
        GetCards(list);
    }, [])

    return (
        <div>
            <div className="mx-5 mt-5 py-3 border rounded bg-darkgrey" id="search">
                <h1 className="mx-5 my-2">Combat Cards</h1><hr />
                <div className="my-2 mx-2">
                    <div className="input-group">
                        <input className="form-control p-1 ms-5" placeholder="Cardname" />
                        <button className="btn btn-dark py-1 px-2 me-5 border">Search</button>
                    </div>
                </div>
            </div>
            <ListCards list={list.list} />
        </div>
    )
}

export default CombatCards