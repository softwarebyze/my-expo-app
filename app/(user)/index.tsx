import { User } from 'firebase/auth';
import { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';

import EditScreenInfo from '../../components/edit-screen-info';
import { UserContext } from '../_layout';

export default function TabOneScreen() {
  const { user } = useContext(UserContext);
  return (
    <ScrollView>
      <Text className={styles.title}>Tab One</Text>
      <View className={styles.separator} />
      <Text>{(user as User).isAnonymous ? '🥷anonymous user' : JSON.stringify(user, null, 2)}</Text>
      <Text>User id: {user?.uid}</Text>
      <EditScreenInfo path="app/(user)/index.tsx" />
    </ScrollView>
  );
}

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
