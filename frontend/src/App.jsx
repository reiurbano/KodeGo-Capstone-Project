import { SessionContext, EndpointContext, ListContext } from './Contexts.js'
import { useState } from 'react'
import Index from './pages/Index.jsx'

function App() {
  const endpoint = "http://localhost/library-of-ruina/backend/";
  const [session, updateSession] = useState(false);
  const [list, updateList] = useState([]);

  return (
    <SessionContext.Provider value={{ session, updateSession }}>
      <EndpointContext.Provider value={endpoint}>
        <ListContext.Provider value={{ list, updateList }}>
          <Index />
        </ListContext.Provider>
      </EndpointContext.Provider>
    </SessionContext.Provider>
  )
}

export default App
