import { useContext } from 'react';
import { Text, View } from 'react-native';

import { UserContext } from '../_layout';

export default function LogoutScreen() {
  const { user, handleLogOOt } = useContext(UserContext);
  return (
    <View>
      <Text className="text-red-400" onPress={handleLogOOt}>
        GET ME TF OTTT
      </Text>
    </View>
  );
}
