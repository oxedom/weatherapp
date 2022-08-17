import { pubsub } from "./pubsub.js";
import { apiController } from "./api";

const libs = {
  getFormData(event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    return formProps;
  },
};

const app = (function () {
  const queryApi = async (query) => {
    let data = await apiController().cityWeather(query);
    pubsub.publish("cityDataReturned", data);
  };

  pubsub.subscribe("citySearch", queryApi);
})();

const dom = (function () {
  let h1 = document.getElementById("h1");
  let form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = libs.getFormData(e);
    pubsub.publish("citySearch", data.citySearch);
  });

  let renderCard = ({ name, weather, main, wind }) => {
    console.log(name);
    console.log(weather);
    console.log(main);
    console.log(wind);
  };

  pubsub.subscribe("cityDataReturned", renderCard);
})();
