import { Location } from "../types/Location";

class LocationService {
  async getLocations(): Promise<Location[]> {
    return fetch("http://localhost:8080/locations")
      .then(res => res.json())
      .then(res => {
        return res as Location[]
      });
  }
}

export default new LocationService();