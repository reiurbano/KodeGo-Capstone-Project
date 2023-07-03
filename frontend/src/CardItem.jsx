import { useEffect } from "react"

function CardItem({ chapter, cost, dice, effect, id, range, rarity, title, source }) {
    const temp = rarity.split(" ")[1];
    const scarcity = temp.slice(1, (temp.length - 1));

    const name = encodeURIComponent(title);
    const rank = encodeURIComponent(chapter);
    const enemy = encodeURIComponent(source);

    return (
        <div className="d-flex flex-wrap justify-content-center my-3">
            <div className="cp-card-left">
                <a className="cp-link stretched-link" data-bs-toggle="collapse"
                    data-bs-target={`#${id}`} aria-expanded="false">
                    <img className="img-fluid" src={`/frames/${scarcity}_${cost}_${range}_left.png`} />
                </a>
                <h6 className="cp-title">{title}</h6>
                <div className="cp-overflow-img">
                    <img className="cp-img" src={`/pages/combat_pages/${rank}/${enemy}/${name}.png`} />
                </div>
                <div className="cp-overflow-text">
                    <div className="cp-text-left">
                        Unbearable depression overwhelms all who look into the bath.
                    </div>
                </div>
            </div>
            <div id={`${id}-`} className="cp-card-right collapse collapse-horizontal">
                <img className="img-fluid cp-frame" src={`/frames/${scarcity}_right.png`} />
                <p className="cp-text-right">
                    {effect}
                </p>
            </div>
        </div>
    )
}

export default CardItem