import { useContext, useEffect, useState } from "react"
import { DeckContext } from "./Contexts"
import Deck from "./Deck";

function DeckView() {
    const deck = useContext(DeckContext);
    const [temp, updateTemp] = useState([]);

    useEffect(() => {
        updateTemp(deck.deck);
    }, [deck.deck])

    const mapDeck = () => {
        if (temp != undefined && temp.length != 0) {
            const deckList = temp.map((item,index) => {
                return <Deck
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
                    index={index}
                />;
            });

            return deckList;
        }
    }

    return (
        <div className="accordion accordion-flush mx-2" id="deckAccordion">
            {mapDeck()}
        </div>
    )
}

export default DeckView