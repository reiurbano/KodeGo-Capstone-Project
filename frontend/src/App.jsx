import Index from './pages/Index.jsx'

function App() {
  const endpoint = "http://localhost/library-of-ruina/backend/";

  return (
    <Index endpoint={endpoint} />
  )
}

export default App
