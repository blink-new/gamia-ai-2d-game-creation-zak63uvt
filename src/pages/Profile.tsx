// src/pages/Profile.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserCircle, Mail, LogOut, ShieldCheck } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      // Afficher une notification d'erreur à l'utilisateur si nécessaire
    }
  };

  if (loading && !user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Chargement du profil...</p>
      </div>
    );
  }

  if (!user) {
    // Cela ne devrait pas arriver si la route est protégée, mais c'est une sécurité
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 flex justify-center">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-2xl">
        <header className="text-center mb-10">
          <UserCircle className="mx-auto text-blue-400 w-24 h-24 mb-4" />
          <h1 className="text-3xl font-bold">Mon Profil</h1>
        </header>

        <div className="space-y-6">
          <div className="flex items-center bg-gray-700 p-4 rounded-lg">
            <Mail className="w-6 h-6 mr-4 text-gray-400" />
            <div>
              <p className="text-sm text-gray-400">Adresse Email</p>
              <p className="text-lg text-white">{user.email || 'Non spécifié'}</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-700 p-4 rounded-lg">
            <ShieldCheck className="w-6 h-6 mr-4 text-green-400" />
            <div>
              <p className="text-sm text-gray-400">Statut du compte</p>
              <p className="text-lg text-white">Actif</p> {/* Pourrait être plus dynamique plus tard */}
            </div>
          </div>

          {/* Plus de détails de profil pourraient être ajoutés ici */}
          {/* Par exemple: Nombre de jeux créés, date d'inscription, etc. */}

          <button
            onClick={handleLogout}
            disabled={loading}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 disabled:opacity-50 transition-colors mt-8"
          >
            <LogOut className="w-5 h-5 mr-2" />
            {loading ? 'Déconnexion...' : 'Se Déconnecter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
