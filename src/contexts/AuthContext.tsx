// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// Remplacez par votre client Supabase si vous l'utilisez
// import { supabase } from '../lib/supabaseClient'; 
// import { Session, User } from '@supabase/supabase-js';

// Pour la démo, nous allons simuler l'utilisateur et la session
interface User {
  id: string;
  email?: string;
  // Ajoutez d'autres propriétés utilisateur si nécessaire
}

interface Session {
  user: User | null;
  // Ajoutez d'autres propriétés de session si nécessaire
}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  loading: boolean;
  login: (email?: string, password?: string) => Promise<void>; // Paramètres optionnels pour la démo
  logout: () => Promise<void>;
  signup: (email?: string, password?: string) => Promise<void>; // Paramètres optionnels pour la démo
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler la vérification de la session au chargement
    const checkUser = async () => {
      setLoading(true);
      // Dans une vraie application, vous vérifieriez ici la session avec Supabase
      // const { data: { session } } = await supabase.auth.getSession();
      // setSession(session);
      // setUser(session?.user ?? null);

      // Simulation
      const storedUser = localStorage.getItem('gamia-user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setSession({ user: parsedUser });
      }
      setLoading(false);
    };
    checkUser();

    // Écoutez les changements d'état d'authentification (pour Supabase)
    // const { data: { subscription } } = supabase.auth.onAuthStateChange(
    //   (_event, session) => {
    //     setSession(session);
    //     setUser(session?.user ?? null);
    //     setLoading(false);
    //   }
    // );
    // return () => subscription.unsubscribe();
  }, []);

  const login = async (email?: string, password?: string) => {
    setLoading(true);
    // Simulation de connexion
    // Dans une vraie application:
    // const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    // if (error) throw error;
    // setUser(data.user);
    // setSession(data.session);
    console.log("Tentative de connexion avec:", email, password); // Pour le débogage
    const demoUser: User = { id: 'demo-user-id', email: email || 'test@example.com' };
    localStorage.setItem('gamia-user', JSON.stringify(demoUser));
    setUser(demoUser);
    setSession({ user: demoUser });
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    // Simulation de déconnexion
    // await supabase.auth.signOut();
    localStorage.removeItem('gamia-user');
    setUser(null);
    setSession(null);
    setLoading(false);
  };

  const signup = async (email?: string, password?: string) => {
    setLoading(true);
    // Simulation d'inscription
    // const { data, error } = await supabase.auth.signUp({ email, password });
    // if (error) throw error;
    // Pour la démo, on connecte directement l'utilisateur après l'inscription
    console.log("Tentative d'inscription avec:", email, password); // Pour le débogage
    const demoUser: User = { id: 'new-user-id', email: email || 'new@example.com' };
    localStorage.setItem('gamia-user', JSON.stringify(demoUser));
    setUser(demoUser);
    setSession({ user: demoUser });
    // Dans une vraie app Supabase, vous pourriez vouloir attendre la confirmation par email
    // ou configurer l'auto-confirmation.
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ session, user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
