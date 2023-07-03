import { useEffect, useState, useContext } from "react"
import { SessionContext } from "./Contexts"
import CheckSess from "./CheckSess"
import CardItem from "./CardItem"

function ListCards(list) {
    const session = useContext(SessionContext);
    const [test, updateTest] = useState([]);

    useEffect(() => {
        CheckSess(session);
    }, [session.session])

    useEffect(() => {
        updateTest(list);
    }, [list])

    const mapList = () => {
        if (test.list != undefined && test.list.length != 0) {
            const cardList = test.list.map((item) => {
                return <CardItem
                    chapter={item.chapter}
                    cost={item.cost}
                    dice={item.dice}
                    effect={item.effect}
                    key={item.id}
                    id={item.id}
                    range={item.range}
                    rarity={item.rarity}
                    title={item.title}
                    source={item.source}
                    sess={session.session}
                />;
            });

            return cardList;
        }
    }

    return (
        <div className={`d-flex flex-wrap justify-content-evenly mx-5 mt-3 ${(session.session) ? 'maxHeight' : ''}`} id="card-list">
            {mapList()}
        </div>
    )
}

export default ListCards