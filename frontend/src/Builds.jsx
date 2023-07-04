import { useState } from 'react';
import CardItem from './CardItem'
import { endpoint } from './Contexts';

function Builds({ rank, name, desc, floor, deck, id }) {
    const [update, setUpdate] = useState(false);

    const mapDeck = () => {
        if (deck != undefined && deck.length != 0) {
            const deckList = deck.map((item, index) => {
                return <CardItem
                    chapter={item.chapter}
                    cost={item.cost}
                    dice={item.dice}
                    effect={item.effect}
                    key={index}
                    id={item.id}
                    range={item.range}
                    rarity={item.rarity}
                    title={item.title}
                    source={item.source}
                />;
            });

            return deckList;
        }
    }

    const handleDelete = async (x, i) => {
        const response = await fetch(`${endpoint}deletedeck.php?id=${i}`, {
            credentials: 'include',
            method: 'POST'
        })
        
        const data = await response.json();

        if (data.success) {
            alert(data.message);
            // setUpdate((current) => {
            //     return !current;
            // })
        } else {
            alert(data.message);
        }
    }

    const newID = id;

    return (
        <div className="row mx-5 mt-5 py-3 border rounded">
            <div className="col-md-4 deck-left text-center">
                <h3 className="mb-2 mx-3 px-5">{name}</h3><hr className="mb-2" />
                <div className="mx-5 py-3">
                    <span>{floor}, {rank}</span>
                </div>
                <hr className="mb-2" />
                <div className="mx-5 py-3">
                    <p className="px-3 py-2">
                        {desc}
                    </p>
                </div>
            </div>
            <div className="col-md-6 d-flex flex-wrap justify-content-evenly mx-4 mt-3 deckMap">
                {mapDeck()}
            </div>
            <div className="col-md-1 ms-auto">
                <button className="btn btn-danger px-3 py-2" onClick={(evt) => {handleDelete(evt, newID)}}>X</button>
            </div>
        </div>
    )
}

export default Builds