import { Location } from "../types/Location";
import { Region } from "../types/Region";
import MapView, { Heatmap, Provider } from 'react-native-maps';
import { StyleProp, ViewStyle } from "react-native";

export function Map({ points, initialRegion, onRegionChange, provider, style }: { points: Location[], initialRegion: Region, onRegionChange: (region: Region) => void, provider: Provider, style: StyleProp<ViewStyle> }) {
  return (
    <MapView
      provider={provider}
      style={style}
      initialRegion={initialRegion}
      onRegionChangeComplete={onRegionChange}
    >
      <Heatmap 
        points={points}
        opacity={1}
        radius={20}
      />
    </MapView>
  )
}