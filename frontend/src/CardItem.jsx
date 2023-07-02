function CardItem({ chapter, cost, dice, effect, id, range, rarity, title }) {
    return (
        <div>
            <p className="p-5 m-5">Hello World</p>
            {/* <div id={`${id}`} className="d-flex flex-wrap justify-content-center">
                <div className="cp-card-left">
                    <a className="cp-link stretched-link" data-bs-toggle="collapse"
                        data-bs-target={`${title}-${id}`} aria-expanded="false">
                        <img className="img-fluid" src={`/frames/${rarity}_${cost}_${range}_left.png`} />
                    </a>
                    <h6 className="cp-title">{title}</h6>
                    <div className="cp-overflow-img">
                        <img className="cp-img" src={`/pages/combat_pages/${chapter}/librarian/${title}.png`} />
                    </div>
                    <div className="cp-overflow-text">
                        <div className="cp-text-left">
                            Unbearable depression overwhelms all who look into the bath.
                        </div>
                    </div>
                </div>
                <div id={`${title}-${id}`} className="cp-card-right collapse collapse-horizontal">
                    <img className="img-fluid cp-frame" src={`/frames/${rarity}_right.png`} />
                    <p className="cp-text-right">
                        {effect}
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default CardItem