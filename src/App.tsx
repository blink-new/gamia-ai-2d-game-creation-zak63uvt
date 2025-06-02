// src/App.tsx
import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Shadcn/ui utilise react-hot-toast par défaut
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CreateGame from './pages/CreateGame';
import GameView from './pages/GameView';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

const AppRoutes: React.FC = () => {
  const { loading } = useAuth();

  // Affiche LoadingScreen globalement pendant que AuthContext charge l'état initial
  // mais seulement si aucune page n'est encore rendue (pour éviter le flash sur les changements de route)
  // Une meilleure approche pourrait être d'intégrer cela plus profondément dans la logique de chaque page
  // ou d'avoir un état de chargement plus granulaire.
  // Pour l'instant, on le laisse ici pour la vérification initiale de session.
  if (loading && !window.location.pathname.startsWith('/')) { // Heuristique simple
     return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Routes Publiques */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Routes Protégées */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-game" element={<CreateGame />} />
            <Route path="/game/:gameId" element={<GameView />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          
          {/* Redirection pour les routes non trouvées */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          className: '',
          style: {
            margin: '10px',
            background: '#333',
            color: '#fff',
            zIndex: 10000, // Assurez-vous qu'il est au-dessus des autres éléments
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: 'green',
              secondary: 'white',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: 'red',
              secondary: 'white',
            },
          },
        }}
      />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
