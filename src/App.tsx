import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Auth/Login'
import { Toaster } from 'sonner'
import Register from './pages/Auth/Register'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import UserDashboard from './pages/dashboard/UserDashboard'
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/overview" element={
          <MainLayout
            pageName="UserDashboard"
          >
            <UserDashboard />
          </MainLayout>}
        />
        <Route path="/admin/overview" element={
          <MainLayout
            pageName="Dashboard"
          >
            <Dashboard />
          </MainLayout>}
        />

      </Routes>

    </>
  )
}

export default App
