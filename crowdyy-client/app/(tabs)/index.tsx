import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { useEffect, useState } from 'react';

import  LocationService  from '../../services/LocationService'
import { Location } from "../../types/Location";

import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';

export default function TabOneScreen() {
  const [points, setPoints] = useState<Location[]>();

  useEffect(() => {
    LocationService.getLocations()
       .then(locations => setPoints(locations));
  }, []);

  return (
    <View style={styles.container}>
       <MapView
	        provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 6.82646681,
            longitude: 79.87121907,
            latitudeDelta: 0.09,
            longitudeDelta: 0.0121
          }}
        >
          <Heatmap 
            points={points}
            opacity={1}
            radius={20}
          />
        </MapView>
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
