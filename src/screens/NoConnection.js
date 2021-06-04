import React from 'react';
import { View, Image } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function NoConnection() {
  const fontBold = useTheme().fonts.bold;
  const colors = useTheme().colors;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '20%',
        backgroundColor: colors.background,
      }}
    >
      <Image
        style={{ maxWidth: '150%', borderRadius: 5 }}
        source={require('../../assets/sadpokemon.jpg')}
        resizeMode='contain'
      />
      <Text style={{ textAlign: 'center', fontSize: 20, ...fontBold }}>You're offline.</Text>
      <Text style={{ textAlign: 'center' }}>
        To use this application, you need to connect to the internet.
      </Text>
    </View>
  );
}