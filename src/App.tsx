
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Auth/Login'
import { Toaster } from 'sonner'
import Register from './pages/Auth/Register'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Toaster />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
     
    </>
  )
}

export default App
