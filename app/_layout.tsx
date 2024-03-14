import '../global.css';

import { Stack } from 'expo-router';
import { User, onAuthStateChanged, signInAnonymously, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import { auth } from '~/utils/firebase';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  // initialRouteName: '(tabs)',
};

type UserContextType = {
  user: User | null;
  handleSignIn: () => void;
  handleLogOOt: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  handleSignIn: () => {},
  handleLogOOt: () => {},
});

const useLog = (something: any) => useEffect(() => console.log(something), [something]);

export default function RootLayout() {
  const [user, setUser] = useState<null | User>(null);

  const handleLogOOt = () => {
    signOut(auth);
  };

  useLog(user);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsub;
  }, []);

  const handleSignIn = async () => {
    try {
      const { user } = await signInAnonymously(auth);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, handleSignIn, handleLogOOt }}>
      <Stack>
        <Stack.Screen redirect={!user} name="(user)" options={{ headerShown: false }} />
        <Stack.Screen redirect={!!user} name="login" />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </UserContext.Provider>
  );
}
