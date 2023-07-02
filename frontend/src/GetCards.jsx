function GetCards() {
    return (
        <div>
            <div id="blood" className="d-flex flex-wrap justify-content-center">
                <div className="cp-card-left">
                    <a className="cp-link stretched-link" data-bs-toggle="collapse"
                        data-bs-target="#bld-right" aria-expanded="false">
                        <img className="img-fluid" src="/frames/common_0_melee_left.png" />
                    </a>
                    <h6 className="cp-title">Blood</h6>
                    <div className="cp-overflow-img">
                        <img className="cp-img"
                            src="/pages/combat_pages/canard/librarian/Evade.png" />
                    </div>
                    <div className="cp-overflow-text">
                        <p className="cp-text-left">Unbearable depression overwhelms all who look into the
                            bath.</p>
                    </div>
                </div>
                <div id="bld-right" className="cp-card-right collapse collapse-horizontal">
                    <img className="img-fluid cp-frame" src="/frames/common_right.png" />
                    <p className="cp-text-right">[Single Ally] Defensive dice gain 1-2 Power. Receive 3-5
                        additional Stagger damage upon taking a hit.</p>
                </div>
            </div>
        </div>
    )
}

export default GetCards