import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Map } from '../../components/Map'
import { useEffect } from 'react';

import  LocationService  from '../../services/LocationService'
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocations, DEFAULT_REGION } from '../../hooks/useLocation';

export default function TabOneScreen() {
  const {
    points,
    region,
    onPointsChange,
    onRegionChange,
  } = useLocations();

  useEffect(() => {
    LocationService.getCurrentRegion()
      .then(region => onRegionChange(region ?? DEFAULT_REGION));
  }, []);

  useEffect(() => {
    if (region) {
      const { latitude, longitude, latitudeDelta, longitudeDelta } = region;
      LocationService.getSurroundingLocations(latitude + latitudeDelta/2, latitude - latitudeDelta/2, longitude + longitudeDelta/2, longitude - longitudeDelta/2)
        .then(locations => onPointsChange(locations));
    }
  }, [region])

  return (
    <View style={styles.container}>
      {region && <Map
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        points = {points}
        initialRegion={region}
        onRegionChange={onRegionChange}
      />}
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