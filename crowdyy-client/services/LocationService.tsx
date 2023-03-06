import { Location } from "../types/Location";
import { API_HOST } from "@env";

class LocationService {
  async getLocations(): Promise<Location[] | undefined> {
    return fetch(`${API_HOST}/locations`)
      .then(res => res.json())
      .then(res => {
        return res as Location[]
      });
  }
}

export default new LocationService();