import { useState } from "react";
import { Location } from "../types/Location";
import { Region } from "../types/Region";

export const DEFAULT_REGION = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
}

export function useLocations() {
  const [points, setPoints] = useState<Location[]>([]);
  const [region, setRegion] = useState<Region>();

  function onRegionChange(region: Region) {
    setRegion(region);
  }

  function onPointsChange(points: Location[] | undefined) {
    setPoints(points ?? []);
  }

  return {
    points: points,
    region: region,
    onPointsChange: onPointsChange,
    onRegionChange: onRegionChange,
  }
}