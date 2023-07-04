import { useState, useEffect } from "react"
import Builds from "./Builds"

function ListDecks({build}) {
    const [temp, updateTemp] = useState([]);

    useEffect(() => {
        updateTemp(build);
    }, [build])

    const mapBuilds = () => {
        if (temp != undefined && temp.length != 0) {
            const buildList = temp.map((item) => {
                return <Builds
                    rank={item.rank}
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    desc={item.desc}
                    floor={item.floor}
                    deck={item.deck}
                />;
            });

            return buildList;
        }
    }

    return (
        <div>
            {mapBuilds()}
        </div>
    )
}

export default ListDecks