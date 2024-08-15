import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [day, setDay] = useState("0");
  const [weatherResult, setWeatherResult] = useState("");

  const apiKey = "38c592a76d3a8b863dbd0eb63dfa0db7";

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${apiKey}`;

    fetch(geocodingUrl)
      .then((response) => response.json())
      .then((locationData) => {
        if (!Array.isArray(locationData) || locationData.length === 0) {
          throw new Error("Location not found");
        }

        const { lat, lon } = locationData[0];

        // Forecast API URL
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        return fetch(forecastUrl);
      })
      .then((response) => response.json())
      .then((data) => {
        let resultHTML = "<h2>Weather Forecast</h2>";

        const forecasts = data.list.filter((forecast) => {
          const dateTime = new Date(forecast.dt * 1000);
          const targetDate = new Date();
          targetDate.setDate(targetDate.getDate() + parseInt(day));

          return dateTime.toDateString() === targetDate.toDateString();
        });

        if (forecasts.length === 0) {
          resultHTML +=
            "<p>No forecast data available for the selected day.</p>";
        } else {
          forecasts.forEach((forecast) => {
            const dateTime = new Date(forecast.dt * 1000);
            const temp = forecast.main.temp;
            const icon = forecast.weather[0].icon;
            const imageUrl =
              "https://openweathermap.org/img/wn/" + icon + ".png";

            resultHTML += `
              <div>
                <h3>${dateTime.toLocaleString()}</h3>
                <p>Temperature: ${temp} Kelvin</p>
                <img src="${imageUrl}" alt="Weather icon">
              </div>
            `;
          });
        }

        setWeatherResult(resultHTML);
      })
      .catch((error) => {
        setWeatherResult(`<p>Error: ${error.message}</p>`);
      });
  };

  const handleLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const reverseGeocodingUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

          fetch(reverseGeocodingUrl)
            .then((response) => response.json())
            .then((data) => {
              if (!Array.isArray(data) || data.length === 0) {
                throw new Error(
                  "Unable to determine location from coordinates"
                );
              }

              const {
                name: cityName,
                state: stateName,
                country: countryName,
              } = data[0];
              setCity(cityName || "");
              setState(stateName || "");
              setCountry(countryName || "");

              // Automatically trigger form submission with live location data
              handleSubmit(null); // Call handleSubmit without event object
            })
            .catch((error) => {
              setWeatherResult(`<p>Error: ${error.message}</p>`);
            });
        },
        (error) => {
          setWeatherResult(`<p>Error: ${error.message}</p>`);
        }
      );
    } else {
      setWeatherResult("<p>Geolocation is not supported by this browser.</p>");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">5-Day Weather Forecast</h1>
      <form id="weatherForm" onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="city" className="block mb-1">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block mb-1">
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-1">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="day" className="block mb-1">
            Select Day:
          </label>
          <select
            id="day"
            name="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded"
          >
            <option value="0">Today</option>
            <option value="1">Tomorrow</option>
            <option value="2">Day After Tomorrow</option>
            <option value="3">3 Days Later</option>
            <option value="4">4 Days Later</option>
          </select>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Get Forecast
        </button>
      </form>
      <button
        onClick={handleLiveLocation}
        className="p-2 bg-green-500 text-white rounded mb-4"
      >
        Get Forecast for Live Location
      </button>
      <div
        id="weatherResult"
        dangerouslySetInnerHTML={{ __html: weatherResult }}
        className="mt-4"
      ></div>
    </div>
  );
};

export default Weather;
