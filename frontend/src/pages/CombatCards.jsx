function CombatCards() {
    return (
        <div className="mx-5 mt-5 py-3 border rounded" id="search">
            <h1 className="mx-5 my-2">Combat Cards</h1><hr />
            <form className="mx-5 mt-3" id="page-search">
                <div className="row mt-2">
                    <div className="col-lg-5 my-2 mx-2">
                        <input className="form-control p-1" placeholder="Search by name" />
                    </div>
                    <div className="col-lg-5 my-2 mx-2">
                        <div className="input-group">
                            <input className="form-control p-1" placeholder="Search by effect keywords" />
                            <button className="btn btn-dark border py-1 px-2">Search</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CombatCards