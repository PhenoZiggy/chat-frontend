import axios from "axios";

const weatherKey = process.env.NEXT_PUBLIC_WEATHERAPIKEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const locationUrl = "http://api.openweathermap.org/geo/1.0/direct";

export const getWeather = async (query: string) => {
  return await axios
    .get(baseUrl, {
      params: {
        q: query,
        units: "metric",
        appid: weatherKey,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

export const getIcon = async (query: string) => {
  return await axios
    .get(`https://openweathermap.org/img/wn/${query}@2x.png`)
    .then((res) => res)
    .catch((err) => err);
};
