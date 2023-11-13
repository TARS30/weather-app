import React, { useEffect, useState } from "react";

import Main from "./components/Main";
import Input from "./components/Input";
import Weather from "./components/Weather";

import rainyImage from "./img/rainy-day.jpg";
import cloudyImage from "./img/cloudy.jpg";
import sunnyImage from "./img/sunny.jpg";
import windyImage from "./img/windy.jpg";
import thunderImage from "./img/thunder.jpg";
import heavyRainImage from "./img/heavy-rain.jpg";

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const App = () => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wallpaper, setWallpaper] = useState("");
  const [displayLocation, setDisplayLocation] = useState("");

  const locationUpper = location.toLocaleUpperCase();

  if (location.length >= 3) {
    document.title = `Weather In ${locationUpper}`;
  } else {
    document.title = "Weather App";
  }
  useEffect(() => {
    const fetchWeather = async () => {
      if (location.length < 3) {
        return;
      }

      try {
        setIsLoading(true);

        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const geoData = await geoRes.json();

        if (!geoData.results) throw new Error("Location not found");

        const { latitude, longitude, timezone, name, country_code } =
          geoData.results.at(0);

        setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
        );
        const weatherData = await weatherRes.json();

          console.log(weatherData)

        setWeather(weatherData.daily);

        const todaysWeatherCode = weatherData.daily.weathercode[0];

        switch (todaysWeatherCode) {
          case 80 || 51 || 56 || 61 || 66:
            setWallpaper(rainyImage);
            break;
          case 3:
            setWallpaper(cloudyImage);
            break;
          case 0:
            setWallpaper(sunnyImage);
            break;
          case 45 || 48:
            setWallpaper(windyImage);
            break;
          case 51 || 56 || 61 || 66 || 80:
            setWallpaper(rainyImage);
            break;
          case 53 || 55 || 63 || 65 || 57 || 67 || 81 || 82:
            setWallpaper(windyImage);
            break;
          case 71 || 73 || 75 || 77 || 85 || 86:
            setWallpaper(heavyRainImage);
            break;
          case 75:
            setWallpaper(thunderImage);
            break;
          case 96 || 99:
            setWallpaper(thunderImage);
            break;
          default:
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <Main wallpaper={wallpaper}>
      <h1 className="title">Weather Forecast</h1>
      <Input location={location} onSetLocation={setLocation} />
      {isLoading && <p className="loader">Loading...</p>}
      {weather.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </Main>
  );
};

export default App;
