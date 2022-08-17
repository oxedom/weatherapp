import { db } from "./db";

export function apiController() {
    //Links and keys
    let apiKey = db.key;

    let apiFetcher = async (link, key) => {
        try {
            console.log('API Fetcher has fired');
            const promise = await fetch(`${link}${key}`);
            const data = await promise.json();
            return data;
        } catch (error) {
            console.log(error);
            return "ERROR";
        }
    };

    let geoFetcher = async (city) => {
        try {
            console.log('GEO Fetcher has fired');
            let geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=`;
            return apiFetcher(geoApi, apiKey);
        } catch (error) {
            console.log(error);
            return "ERROR";
        }
    };

    let weatherFetcher = async (cords) => {
        try {
            console.log('Weather Fetcher has fired');
            let weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&&lon=${cords.lon}&appid=`;
            return apiFetcher(weatherApi, apiKey);
        } catch (error) {
            console.log(error);
            return "ERROR";
        }
    };

    let cityWeather = async (city) => {
        try {
            console.log('CityWeather has fired');
            const cityData = await geoFetcher(city);
            const cityCords = { lat: cityData[0].lat, lon: cityData[0].lon };

            const weatherData = await weatherFetcher(cityCords);
            console.log('data is:');
            console.log(weatherData)
            return weatherData;
        } catch (error) {
            console.log(error);
            return "ERROR";
        }
    };

    return { cityWeather };
};


