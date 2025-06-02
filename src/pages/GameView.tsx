const mockGames = [
  { id: '1', title: 'Mon Premier Jeu Spatial', description: 'Un jeu de tir spatial simple avec des astéroïdes et un vaisseau contrôlable par les flèches. Le but est de survivre le plus longtemps possible.', code: '// Code Phaser.js pour le jeu spatial...', assets: [], createdAt: '2024-05-27' },
  { id: '2', title: 'Aventure dans la Jungle', description: 'Un jeu de plateforme où le joueur est un explorateur qui doit éviter des pièges et collecter des trésors dans une jungle luxuriante.', code: '// Code Phaser.js pour le jeu d\'aventure...', assets: [], createdAt: '2024-05-25' },
  { id: '3', title: 'Puzzle Mania', description: 'Un jeu de puzzle coloré où il faut aligner des blocs de même couleur pour les faire disparaître.', code: '// Code Phaser.js pour le jeu de puzzle...', assets: [], createdAt: '2024-05-22' },
  // Ajouter l'ID factice généré par CreateGame.tsx pour la démo
  { id: Date.now().toString(), title: 'Nouveau Jeu Généré', description: 'Description du nouveau jeu généré.', code: '// Code Phaser.js...', assets: [], createdAt: new Date().toISOString().split('T')[0] },
];

// ... existing code ...

// src/pages/GameView.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Code, Edit3, Download, UploadCloud, Share2 } from 'lucide-react';

// Simuler la récupération des détails d'un jeu
const mockGames = [
  { id: '1', title: 'Mon Premier Jeu Spatial', description: 'Un jeu de tir spatial simple avec des astéroïdes et un vaisseau contrôlable par les flèches. Le but est de survivre le plus longtemps possible.', code: '// Code Phaser.js pour le jeu spatial...', assets: [], createdAt: '2024-05-27' },
  { id: '2', title: 'Aventure dans la Jungle', description: 'Un jeu de plateforme où le joueur est un explorateur qui doit éviter des pièges et collecter des trésors dans une jungle luxuriante.', code: '// Code Phaser.js pour le jeu d\'aventure...', assets: [], createdAt: '2024-05-25' },
  { id: '3', title: 'Puzzle Mania', description: 'Un jeu de puzzle coloré où il faut aligner des blocs de même couleur pour les faire disparaître.', code: '// Code Phaser.js pour le jeu de puzzle...', assets: [], createdAt: '2024-05-22' },
  // Ajouter l'ID factice généré par CreateGame.tsx pour la démo
  { id: Date.now().toString(), title: 'Nouveau Jeu Généré', description: 'Description du nouveau jeu généré.', code: '// Code Phaser.js...', assets: [], createdAt: new Date().toISOString().split('T')[0] },
];

const GameView: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  // Trouver le jeu correspondant, ou un jeu par défaut si non trouvé (pour la démo)
  const game = mockGames.find(g => g.id === gameId) || mockGames.find(g => g.id === '1') || mockGames[0];

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl text-red-400">Jeu non trouvé</h2>
        <Link to="/dashboard" className="mt-4 text-blue-400 hover:text-blue-300 flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" /> Retour au Tableau de Bord
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <header className="mb-8">
        <Link to="/dashboard" className="text-blue-400 hover:text-blue-300 flex items-center mb-4">
          <ArrowLeft className="w-5 h-5 mr-2" /> Retour au Tableau de Bord
        </Link>
        <h1 className="text-4xl font-bold truncate">{game.title}</h1>
        <p className="text-gray-400 mt-1 text-sm">Créé le: {new Date(game.createdAt).toLocaleDateString()}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne principale pour le jeu et la description */}
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Aperçu du Jeu (Bientôt !)</h2>
          <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-6">
            <p className="text-gray-500 text-lg">Le jeu apparaîtra ici.</p>
            {/* Plus tard: <iframe src="/path/to/game/index.html" className="w-full h-full rounded-lg" /> */}
          </div>

          <h3 className="text-xl font-semibold mb-2 text-gray-200">Description</h3>
          <p className="text-gray-400 whitespace-pre-wrap leading-relaxed">
            {game.description || 'Aucune description fournie.'}
          </p>
        </div>

        {/* Colonne latérale pour les actions */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50" disabled>
                <Play className="w-5 h-5 mr-2" /> Jouer au Jeu (Bientôt)
              </button>
              <button className="w-full flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50" disabled>
                <Edit3 className="w-5 h-5 mr-2" /> Modifier l\'IA / Instructions (Bientôt)
              </button>
              <button className="w-full flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50" disabled>
                <Code className="w-5 h-5 mr-2" /> Éditer le Code (Bientôt)
              </button>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Gestion</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50" disabled>
                <UploadCloud className="w-5 h-5 mr-2" /> Télécharger Assets (Bientôt)
              </button>
              <button className="w-full flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50" disabled>
                <Share2 className="w-5 h-5 mr-2" /> Publier (Bientôt)
              </button>
              <button className="w-full flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-50" disabled>
                <Download className="w-5 h-5 mr-2" /> Télécharger (.zip) (Bientôt)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameView;