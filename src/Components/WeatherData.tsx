import React from "react";

interface WeatherDataProps {
  weatherData: any | null;
}

const WeatherData: React.FC<WeatherDataProps> = ({ weatherData }) => {
  return (
    <>
      <section>
        <div className="container">
          {!weatherData ? (
            <h1>Enter a city name</h1>
          ) : weatherData === "City Not found" ? (
            <h1>City Not found</h1>
          ) : (
            <>
              <div className="section">
                <div className="title">
                  <p> {weatherData.name}</p>
                  <img
                    src={`https://flagcdn.com/${weatherData.sys.country.toLowerCase()}.svg`}
                    width="30"
                  ></img>
                </div>
                <div className="property">
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                    alt="icon"
                    loading="lazy"
                  />
                  <p>
                    Weather: <strong>{weatherData.weather[0].main}</strong> (
                    {weatherData.weather[0].description})
                  </p>
                </div>
                <div className="value">
                  <p>
                    Temperature :{" "}
                    <strong>{Math.round(weatherData.main.temp)}&deg; </strong>
                  </p>
                  <p>
                    Humidity : <strong>{weatherData.main.humidity}</strong>
                  </p>
                </div>
              </div>
              <div className="section">
                <div className="value">
                  <p>
                    Min Temp:{" "}
                    <strong>
                      {Math.round(weatherData.main.temp_min)}&deg;
                    </strong>
                  </p>
                  <p>
                    Max Temp :{" "}
                    <strong>
                      {Math.round(weatherData.main.temp_max)}&deg;
                    </strong>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default WeatherData;
