
export interface Weather {
    current_weather: CurrentWeather;
  }
  
  export interface CurrentWeather {
      temperature: number;
      time: string;
  }
  
  export interface HourlyUnits {
    time: string
    temperature_2m: string
    relativehumidity_2m: string
    windspeed_10m: string
  }
  
  export interface Hourly {
    time: string[]
    temperature_2m: number[]
    relativehumidity_2m: number[]
    windspeed_10m: number[]
  }
  