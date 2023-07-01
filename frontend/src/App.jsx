import { SessionContext, EndpointContext } from './Contexts.js'
import { useState } from 'react'
import Index from './pages/Index.jsx'

function App() {
  const endpoint = "http://localhost/library-of-ruina/backend/";
  const [session, updateSession] = useState(false);

  return (
    <SessionContext.Provider value={{ session, updateSession }}>
      <EndpointContext.Provider value={endpoint}>
        <Index />
      </EndpointContext.Provider>
    </SessionContext.Provider>
  )
}

export default App
