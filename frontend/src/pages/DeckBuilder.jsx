import { useEffect, useContext, useRef } from "react"
import { ListContext, DeckContext, endpoint } from "../Contexts"
import { useNavigate } from "react-router-dom"
import ListCards from "../ListCards"
import GetCards from "../GetCards"
import DeckView from "../DeckView"

function DeckBuilder() {
    const list = useContext(ListContext);
    const deck = useContext(DeckContext);
    const deckNameRef = useRef();
    const deckRankRef = useRef();
    const deckFloorRef = useRef();
    const deckDescRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        GetCards(list);
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const response = await fetch(`${endpoint}createbuild.php`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: deckNameRef.current.value,
                rank: deckRankRef.current.value,
                floor: deckFloorRef.current.value,
                desc: deckDescRef.current.value
            })
        })

        const data = await response.json();

        if (data.success) {
            const newResponse = await fetch(`${endpoint}createdeck.php`, {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    page_id_1: deck.deck[0].id,
                    page_id_2: deck.deck[1].id,
                    page_id_3: deck.deck[2].id,
                    page_id_4: deck.deck[3].id,
                    page_id_5: deck.deck[4].id,
                    page_id_6: deck.deck[5].id,
                    page_id_7: deck.deck[6].id,
                    page_id_8: deck.deck[7].id,
                    page_id_9: deck.deck[8].id
                })
            })

            const newData = await newResponse.json();
            
            if (newData.success) {
                deck.updateDeck([]);
                navigate('/home/yourdecks');
            } else {
                alert(newData.message);
            }
        } else {
            alert(data.message);
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="mt-5 py-3 border rounded">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex">
                            <input className="mb-1 mx-3 p-1 flex-fill form-control" ref={deckNameRef} type="text" placeholder="Your Deck's Name" required />
                            <button className="btn btn-light px-2 py-1 mx-5 align-self-center" type="submit">Submit</button>
                        </div>
                        <div className="mx-2">
                            <select className="form-select p-1 my-1" ref={deckRankRef} defaultValue="Rank" required>
                                <option value="1">Canard</option>
                                <option value="2">Urban Myth</option>
                                <option value="3">Urban Legend</option>
                                <option value="4">Urban Plague</option>
                                <option value="5">Urban Nightmare</option>
                                <option value="6">Star of the City</option>
                                <option value="7">Impuritas Civitatis</option>
                            </select>
                            <select className="form-select p-1 my-1" ref={deckFloorRef} defaultValue="Floor" required>
                                <option value="1">General Works</option>
                                <option value="2">History</option>
                                <option value="3">Technological Sciences</option>
                                <option value="4">Literature</option>
                                <option value="5">Art</option>
                                <option value="6">Natural Sciences</option>
                                <option value="7">Language</option>
                                <option value="7">Social Sciences</option>
                                <option value="7">Philosophy</option>
                                <option value="7">Religion</option>
                            </select>
                        </div>
                        <div className="mx-2">
                            <textarea className="form-control p-1 my-1" ref={deckDescRef} type="text" placeholder="Short Description" maxLength={255} required />
                        </div>
                        <hr className="mb-2" />
                        <DeckView />
                    </form>
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