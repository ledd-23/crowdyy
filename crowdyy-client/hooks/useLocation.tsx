import { useState } from "react";
import { Location } from "../types/Location";
import { Region } from "../types/Region";


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