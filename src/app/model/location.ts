export interface LocationResults {
  results: Location[];
}

export interface Location {
  geometry: Geometry;
  components: Components;
}

export interface Geometry {
  lat: number;
  lng: number;
}

export interface Components {
  city: string;
}
