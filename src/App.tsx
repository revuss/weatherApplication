import { useEffect, useState } from "react";
import "./App.css";
import HeaderSection from "./Components/HeaderSection";
import SearchForm from "./Components/SearchForm";
import WeatherData from "./Components/WeatherData";
import { useWeatherStore } from "./services/useWeatherStore";

function App() {
  const [searchLocation, setSearchLocation] = useState("");
  const { weatherData, search } = useWeatherStore();

  const handleSearch = () => {
    search(searchLocation);
  };
  useEffect(() => {
    document.title = "Weather Application";
  }, []);
  return (
    <>
      <HeaderSection title="Weather Application" />
      <SearchForm
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
        handleSearch={handleSearch}
      />
      <WeatherData weatherData={weatherData} />
    </>
  );
}

export default App;
