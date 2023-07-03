import { useEffect, useState } from "react"
import CardItem from "./CardItem"

function ListCards(list) {
    const [test, updateTest] = useState([]);

    useEffect(() => {
        updateTest(list);
        if (test.list != undefined && test.list.length != 0) {
            console.log(test.list);
        }
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
                />;
            });

            return cardList;
        }
    }

    return (
        <div className="d-flex flex-wrap justify-content-evenly">
            {mapList()}
        </div>
    )
}

export default ListCards