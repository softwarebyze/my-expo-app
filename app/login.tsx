import { useContext } from 'react';
import { Text, View } from 'react-native';

import { UserContext } from './_layout';

export default function LoginScreen() {
  const { user, handleSignIn } = useContext(UserContext);
  return (
    <View>
      <Text className="text-4xl text-green-800 font-semibold" onPress={handleSignIn}>
        Yerrr
      </Text>
    </View>
  );
}
