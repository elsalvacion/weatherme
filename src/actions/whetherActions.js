import axios from "axios";
import config from "../config";
import { SET_LOADING, SET_ERROR, GET_WHETHER } from "../reducers/actionTypes";

let lat = null,
  long = null;

const filterData = (data) => {
  return {
    temp: data.main.temp,
    humidity: data.main.humidity,
    weather: data.weather[0],
    loc: data.name + ", " + data.sys.country,
    wind: data.wind.speed,
  };
};
export const getWhether =
  (loc = null) =>
  async (dispatch) => {
    setLoading();
    if (loc) {
      // Do here

      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${config.apiKey}`
        );

        dispatch({
          type: GET_WHETHER,
          value: filterData(res.data),
        });
      } catch (err) {
        dispatch({
          type: SET_ERROR,
          value: "Location Not Found",
        });
      }
    } else {
      // use current loc

      // Check if browser support location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            lat = pos.coords.latitude;
            long = pos.coords.longitude;
            try {
              const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${config.apiKey}`
              );
              const data = filterData(res.data);
              dispatch({
                type: GET_WHETHER,
                value: data,
              });
            } catch (err) {
              dispatch({
                type: SET_ERROR,
                value: "Location Not Found",
              });
            }
          },
          async (err) => {
            lat = 43.6532;
            long = 79.3832;
            try {
              const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${config.apiKey}`
              );
              const data = filterData(res.data);

              dispatch({
                type: GET_WHETHER,
                value: data,
              });
            } catch (err) {
              dispatch({
                type: SET_ERROR,
                value: "Location Not Found",
              });
            }
          }
        );
      } else {
        lat = 43.6532;
        long = 79.3832;

        try {
          const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${config.apiKey}`
          );
          const data = filterData(res.data);
          dispatch({
            type: GET_WHETHER,
            value: data,
          });
        } catch (err) {
          dispatch({
            type: SET_ERROR,
            value: "Location Not Found",
          });
        }
      }
    }
  };

const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};
