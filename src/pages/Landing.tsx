// src/pages/Landing.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">
          Bienvenue sur <span className="text-blue-400">Gamia</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 animate-fade-in-up delay-200">
          Créez des jeux 2D incroyables avec la puissance de l'IA. Aucune limite à votre imagination.
        </p>
        <div className="space-x-4 animate-fade-in-up delay-400">
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Commencer Gratuitement
          </Link>
          <Link
            to="/login"
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Se Connecter
          </Link>
        </div>
      </header>

      <main className="w-full max-w-4xl grid md:grid-cols-3 gap-8 text-center animate-fade-in-up delay-600">
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl transform hover:translate-y-[-5px] transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-blue-300">Description Intuitive</h3>
          <p className="text-gray-400">Décrivez simplement le jeu de vos rêves, et laissez notre IA lui donner vie.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl transform hover:translate-y-[-5px] transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-green-300">Phaser.js Puissant</h3>
          <p className="text-gray-400">Les jeux sont générés avec Phaser.js, un moteur de jeu HTML5 robuste et flexible.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-xl transform hover:translate-y-[-5px] transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-purple-300">Exportez & Partagez</h3>
          <p className="text-gray-400">Téléchargez vos créations en HTML/JS ou publiez-les pour le monde entier.</p>
        </div>
      </main>

      <footer className="mt-16 text-center text-gray-500 animate-fade-in-up delay-800">
        <p>&copy; {new Date().getFullYear()} Gamia. Tous droits réservés.</p>
        <p className="text-sm">Fait avec ❤️ et IA</p>
      </footer>
    </div>
  );
};

export default Landing;