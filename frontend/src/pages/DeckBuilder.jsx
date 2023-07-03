import { useEffect, useContext } from "react"
import { ListContext } from "../Contexts"
import ListCards from "../ListCards"
import GetCards from "../GetCards"
import DeckView from "../DeckView"

function DeckBuilder() {
    const list = useContext(ListContext);

    useEffect(() => {
        GetCards(list);
    }, [])

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="mt-5 py-3 border rounded">
                    <div className="d-flex">
                        <h3 className="mb-2 mx-3 flex-fill">Your Deck</h3>
                        <button className="btn btn-light px-2 py-1 mx-5 align-self-center">Submit</button>
                    </div>
                    <hr className="mb-2" />
                    <DeckView />
                </div>
            </div>
            <div className="col-md-7">
                <div className="mx-5 mt-5 py-3 border rounded">
                    <h3 className="mb-2 mx-3 px-5">Cards</h3><hr className="mb-2" />
                    <div className="input-group">
                        <input className="form-control p-1 ms-5" placeholder="Cardname" />
                        <button className="btn btn-dark py-1 px-2 me-5 border">Search</button>
                    </div>
                </div>
                <div>
                    <ListCards list={list.list} />
                </div>
            </div>
        </div>
    )
}

export default DeckBuilder