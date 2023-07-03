import { SessionContext, EndpointContext, ListContext, DeckContext } from './Contexts.js'
import { useState } from 'react'
import Index from './pages/Index.jsx'

function App() {
  const endpoint = "http://localhost/library-of-ruina/backend/";
  const [session, updateSession] = useState(false);
  const [list, updateList] = useState([]);
  const [deck, updateDeck] = useState([]);

  return (
    <SessionContext.Provider value={{ session, updateSession }}>
      <DeckContext.Provider value={{ deck, updateDeck }}>
        <ListContext.Provider value={{ list, updateList }}>
          <EndpointContext.Provider value={endpoint}>
            <Index />
          </EndpointContext.Provider>
        </ListContext.Provider>
      </DeckContext.Provider>
    </SessionContext.Provider>
  )
}

export default App
