import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useEffect, useState } from 'react';

import  LocationService  from '../../services/LocationService'
import { Location } from "../../types/Location";

export default function TabOneScreen() {
  const [location, setLocation] = useState<Location>();

  useEffect(() => {
    LocationService.getLocations()
      .then(locations => locations?.map(location => setLocation(location)))
  }, [])
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{location?.latitude}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
