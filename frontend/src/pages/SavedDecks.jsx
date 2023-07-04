import { useContext, useEffect } from "react"
import { BuildContext, SessionContext, endpoint } from "../Contexts"
import ListDecks from "../ListDecks"

function SavedDecks() {
    const builds = useContext(BuildContext);
    const session = useContext(SessionContext);

    const GetDecks = async () => {
        const response = await fetch(`${endpoint}login.php`, {
            credentials: 'include',
            method: 'GET'
        })

        const data = await response.json();

        if (data.success && data.valid != session.session && data.valid != true) {
            session.updateSession(data.valid)
        } else if (data.success && data.valid == session.session && data.valid == true) {
            const user_id = data.user_id;

            const newResponse = await fetch(`${endpoint}getbuilds.php?id=${user_id}`, {
                credentials: 'include',
                method: 'GET'
            })

            const newData = await newResponse.json();

            builds.updateBuilds(newData);
        }
    }

    useEffect(() => {
        GetDecks();
    }, [])

    useEffect(() => {
        console.log(builds.builds);
    }, [builds.builds])

    return (
        <div>
            <div className="mx-5 mt-5 py-3 border rounded bg-darkgrey">
                <h1 className="mx-5 my-2">Builds</h1><hr />
                <div className="my-2 mx-2">
                    <div className="input-group">
                        <input className="form-control p-1 ms-5" placeholder="Build Name" />
                        <button className="btn btn-dark py-1 px-2 me-5 border">Search</button>
                    </div>
                </div>
            </div>
            <ListDecks build={builds.builds} />
        </div>
    )
}

export default SavedDecks