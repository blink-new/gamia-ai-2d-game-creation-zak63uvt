import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider, useAuth } from './contexts/AuthContext'

// Pages
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'

// Components
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'

function AppContent() {
  const { user, loading } = useAuth()
  
  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
        <Toaster position="top-right" />
      </AuthProvider>
    </Router>
  )
}

export default App