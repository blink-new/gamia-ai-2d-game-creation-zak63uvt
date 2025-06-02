import { Gamepad2, User, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useAuth } from '../contexts/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">Gamia</span>
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    Dashboard
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={logout} className="text-gray-300 hover:text-white">
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <div className="text-gray-300">
                Welcome to Gamia
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}