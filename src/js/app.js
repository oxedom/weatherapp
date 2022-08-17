import { apiController } from "./api";

apiController().cityWeather('London').then(data => console.log(data))