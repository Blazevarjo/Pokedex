import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

import PokemonType from './PokemonType';

export default function PokemonGeneralInfo({ name, id, weight, height, types }) {
  const colors = useTheme().colors;

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.id}>{'#' + id.padStart(3, '0')}</Text>

      <View style={styles.typesContainer}>
        {types.map((type, index) => (
          <PokemonType
            key={index}
            type={type}
            containerStyle={styles.typeContainer}
            textStyle={styles.typeText}
          />
        ))}
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Weight</Text>
          <Text style={styles.infoData}>{weight + ' KG'}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoText}>Height</Text>
          <Text style={styles.infoData}>{height + ' M'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    borderRadius: 20,
    padding: 8,
    elevation: 8,
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 30,
  },
  id: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 20,
  },
  typesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  typeContainer: {
    width: 130,
    height: 30,
    borderRadius: 15,
  },
  typeText: {
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  info: {
    width: '50%',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 15,
  },
  infoData: {
    textAlign: 'center',
    fontSize: 20,
  },
});