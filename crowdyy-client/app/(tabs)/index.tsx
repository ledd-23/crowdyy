import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Map } from '../../components/Map'
import { useEffect } from 'react';

import  LocationService  from '../../services/LocationService'

import { PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocations } from '../../hooks/useLocation';

export default function TabOneScreen() {
  const {
    points,
    region,
    onPointsChange,
    onRegionChange
  } = useLocations({
    latitude: 35.155084,
    longitude: -89.989287,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }); //replace initial region with user's current location

  useEffect(() => {
    LocationService.getLocations()
       .then(locations => onPointsChange(locations));
  }, []);

  return (
    <View style={styles.container}>
      <Map
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        points = {points}
        initialRegion={region}
        onRegionChange={onRegionChange}
      />
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
