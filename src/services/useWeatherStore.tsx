import { create } from "zustand";
import { api } from "./apiService";

interface WeatherData {
  temperature: number;
  description: string;
}

interface WeatherStore {
  weatherData: WeatherData | string | null;
  error: string | null;
  search: (location: string) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
  error: null,
  search: (location) => {
    console.clear();
    fetch(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((result: any) => {
        set({ weatherData: result });
      })
      .catch(() => {
        set({ weatherData: "City Not found" }); // Set weatherData to 'City Not found' on error
      });
  },
}));
