import { DailyWeather, Hourly } from "./weather";

export class CurrentLocationData{
    city: string;
    temperature: number;
    time: string;
    isFavorite: boolean = false;
    daily: DailyWeather;
    hourly: Hourly;
}