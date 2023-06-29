import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import CombatCards from './CombatCards.jsx'
import Abnormalities from './Abnormalities.jsx'
import NotFound from './NotFound.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
            <Route index element={<CombatCards />} />
            <Route path="/abnormalities" element={<Abnormalities />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index