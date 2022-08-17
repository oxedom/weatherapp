

export function apiController() {
  //Links and key
  let apiKey = "82dbf781a95c7b01a16d7fdaaf1b552c";

  let apiFetcher = async (link, key) => {
    try {
      console.log("API Fetcher has fired");
      const promise = await fetch(`${link}${key}`);
      const data = await promise.json();
      return data;
    } catch (error) {
      console.log(error);
      return "ERROR";
    }
  };

  let geoFetcher = async (city) => {
    console.log("GEO Fetcher has fired");
    let geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=`;
    return apiFetcher(geoApi, apiKey);
  };

  let weatherFetcher = async (cords) => {
    console.log("Weather Fetcher has fired");
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&&lon=${cords.lon}&appid=`;
    return apiFetcher(weatherApi, apiKey);
  };

  let cityWeather = async (city) => {
    const cityData = await geoFetcher(city);
    const cityCords = { lat: cityData[0].lat, lon: cityData[0].lon };
    const weatherData = await weatherFetcher(cityCords);
    console.log(weatherData);
    return weatherData;
  };

  return { cityWeather };
}
