// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Gamepad, UserCircle, LogOut, LogIn, UserPlus, LayoutDashboard } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to={user ? "/dashboard" : "/"} className="flex items-center space-x-2 text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            <Gamepad className="w-8 h-8" />
            <span>Gamia</span>
          </Link>
          <div className="flex items-center space-x-3 md:space-x-5">
            {user ? (
              <>
                <NavLink to="/dashboard">
                  <LayoutDashboard className="w-5 h-5 mr-1 md:mr-2" />
                  Tableau de Bord
                </NavLink>
                <NavLink to="/profile">
                  <UserCircle className="w-5 h-5 mr-1 md:mr-2" />
                  Profil
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white rounded-md transition-colors"
                >
                  <LogOut className="w-5 h-5 mr-1 md:mr-2" />
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <LogIn className="w-5 h-5 mr-1 md:mr-2" />
                  Connexion
                </NavLink>
                <NavLink to="/signup" isPrimary>
                  <UserPlus className="w-5 h-5 mr-1 md:mr-2" />
                  Inscription
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isPrimary?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, isPrimary }) => {
  const baseStyle = "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors";
  const primaryStyle = "bg-blue-500 hover:bg-blue-600 text-white";
  const secondaryStyle = "text-gray-300 hover:bg-gray-700 hover:text-white";
  
  return (
    <Link to={to} className={`${baseStyle} ${isPrimary ? primaryStyle : secondaryStyle}`}>
      {children}
    </Link>
  );
}

export default Navbar;
