import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, createContext } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export function AuthContextProvier({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

      return () => {
        unsub();
      };
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
