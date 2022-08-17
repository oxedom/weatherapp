import { apiController } from "./api";
import { pubsub } from "./pubsub";

export { app }
// apiController()
//     .cityWeather("London")
//     .then((data) => console.log(data));

const app = (function () {

    const queryApi = async (query) => {
        let city = query.cityName
        let data = await apiController().cityWeather(city)
        pubsub.publish('cityDataReturned', data)
    }

    pubsub.subscribe('citySearch', queryApi)


})()