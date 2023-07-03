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
                            id={item.id}
                            range={item.range}
                            rarity={item.rarity}
                            title={item.title}
                        />;
            });

            return cardList;
        }
    }

    console.log(mapList());

    return (
        <div>
            {mapList()}
        </div>
    )
}

export default ListCards