// src/pages/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Gamepad2 } from 'lucide-react'; // Assurez-vous d'avoir lucide-react

// Simuler des données de jeu pour l'instant
const mockGames = [
  { id: '1', title: 'Mon Premier Jeu Spatial', description: 'Un jeu de tir spatial simple.', createdAt: '2024-05-27' },
  { id: '2', title: 'Aventure dans la Jungle', description: 'Un jeu de plateforme avec des pièges.', createdAt: '2024-05-25' },
  { id: '3', title: 'Puzzle Mania', description: 'Un jeu de puzzle coloré.', createdAt: '2024-05-22' },
];

const Dashboard: React.FC = () => {
  // const { user } = useAuth(); // Pour récupérer les infos utilisateur plus tard

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center md:text-left">Tableau de Bord</h1>
        <p className="text-gray-400 text-center md:text-left">Gérez vos créations de jeux.</p>
      </header>

      <div className="mb-8">
        <Link
          to="/create-game"
          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Créer un Nouveau Jeu
        </Link>
      </div>

      {mockGames.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          <Gamepad2 className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl">Vous n'avez pas encore créé de jeux.</p>
          <p>Commencez par en créer un nouveau !</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGames.map((game) => (
            <div key={game.id} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-blue-300 mb-2 truncate">{game.title}</h2>
                <p className="text-gray-400 text-sm mb-3 h-10 overflow-hidden">
                  {game.description || 'Aucune description fournie.'}
                </p>
                <p className="text-xs text-gray-500 mb-4">Créé le: {new Date(game.createdAt).toLocaleDateString()}</p>
              </div>
              <Link
                to={`/game/${game.id}`}
                className="mt-auto block w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
              >
                Voir & Gérer
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
