// src/pages/CreateGame.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Zap, AlertCircle } from 'lucide-react';

const CreateGame: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError('Le titre et la description sont requis.');
      return;
    }
    setError(null);
    setLoading(true);
    // Simuler la création du jeu
    console.log('Création du jeu:', { title, description });
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simule un appel API
    // Dans une vraie app, vous appelleriez votre backend/IA ici
    // et récupéreriez l'ID du nouveau jeu.
    const newGameId = Date.now().toString(); // ID factice
    setLoading(false);
    navigate(`/game/${newGameId}`); // Redirige vers la page du nouveau jeu
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 md:p-8">
      <header className="text-center mb-10">
        <Lightbulb className="mx-auto text-yellow-400 w-16 h-16 mb-4" />
        <h1 className="text-4xl font-bold">Créez Votre Jeu</h1>
        <p className="text-gray-400 mt-2">Décrivez votre idée, et laissez l'IA faire la magie !</p>
      </header>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-2xl space-y-6">
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-md flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
          </div>
        )}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
            Titre du Jeu
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Ex: Super Tireur Spatial"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
            Description de Votre Jeu
          </label>
          <textarea
            id="description"
            name="description"
            rows={8}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
            placeholder="Décrivez les mécaniques principales, le style, les personnages, etc. Soyez aussi détaillé que possible !\nPar exemple : Un jeu de plateforme 2D où le joueur contrôle un écureuil qui collecte des noisettes. Il y a des ennemis comme des renards et des hiboux. Le style est cartoon."
          />
          <p className="mt-2 text-xs text-gray-500">
            Plus votre description est détaillée, meilleur sera le résultat généré par l'IA.
          </p>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 disabled:opacity-50 transition-colors"
          >
            <Zap className="w-5 h-5 mr-2" />
            {loading ? 'Génération en cours...' : 'Générer mon Jeu'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGame;
