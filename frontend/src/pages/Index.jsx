import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Abnormalities from './Abnormalities.jsx'
import CombatCards from './CombatCards.jsx'
import NotFound from './NotFound.jsx'
import Register from './Register.jsx'
import Layout from './Layout.jsx'
import Login from './Login.jsx'
import Decks from './Decks.jsx'
import Home from './Home.jsx'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
            <Route index element={<CombatCards />} />
            <Route path="/abnormalities" element={<Abnormalities />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/decks" element={<Decks />} />
            <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index