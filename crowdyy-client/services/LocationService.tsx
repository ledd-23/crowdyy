import { Location } from "../types/Location";
import { API_HOST } from "@env";
import * as ExpoLocation from 'expo-location';
import { Region } from "../types/Region";

class LocationService {
  async getAllLocations(): Promise<Location[] | undefined> {
    return fetch(`${API_HOST}/locations`)
      .then(res => res.json())
      .then(res => {
        return res as Location[]
      });
  }

  async getCurrentRegion(): Promise<Region | undefined> {
    const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    const location = await ExpoLocation.getCurrentPositionAsync({});
    const { latitude, longitude } = location["coords"];
    return {
      latitude: latitude, 
      longitude: longitude, 
      latitudeDelta: 0.01, 
      longitudeDelta: 0.01,
    };
  }
}

export default new LocationService();