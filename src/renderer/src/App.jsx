import LoginForm from "./LoginForm"
import Store from "./Store"
import { useState } from "react"
import { Routes, Route, HashRouter } from 'react-router'

function App() {
  const [user, setUser] = useState({ role: 'не авторизован' })
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<LoginForm setUser={setUser} />} />
          <Route path='/main' element={<Store user={user} />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

