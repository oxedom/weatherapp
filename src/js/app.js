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
  let cityEl = document.getElementById("city");
  let tempEl = document.getElementById("temp");
  let windEl = document.getElementById("wind");

  let form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = libs.getFormData(e);
    pubsub.publish("citySearch", data.citySearch);
  });

  let renderCard = ({ name, weather, main, wind }) => {

    cityEl.innerText = name;
    tempEl.innerText = main.temp / 10;
    windEl.innerText = wind.speed;
  };

  pubsub.subscribe("cityDataReturned", renderCard);
})();
