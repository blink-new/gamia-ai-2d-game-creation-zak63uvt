// src/components/LoadingScreen.tsx
import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex flex-col items-center justify-center z-50">
      <Loader2 className="w-16 h-16 text-blue-400 animate-spin mb-4" />
      <p className="text-white text-xl">Chargement de Gamia...</p>
    </div>
  );
};

export default LoadingScreen;
