export interface Weather {
  current_weather: CurrentWeather;
  daily: DailyWeather;
  hourly: Hourly;
}

export interface CurrentWeather {
  temperature: number;
  time: string;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  relativehumidity_2m: string;
  windspeed_10m: string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
}

export interface DailyWeather {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
}
