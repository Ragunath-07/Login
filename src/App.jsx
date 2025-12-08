import LoginAccount from "./components/LoginAccount"
import Dashboard from "./components/Dashboard"

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<LoginAccount />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
