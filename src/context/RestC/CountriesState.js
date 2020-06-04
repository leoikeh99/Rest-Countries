import React, { useReducer } from "react";
import axios from "axios";
import countriesReducer from "../RestC/countriesReducer";
import countriesContext from "../RestC/countriesContext";
import {
  SET_LOADING,
  GET_COUNTRIES,
  SET_REGION,
  GET_COUNTRY,
  SET_ERROR,
} from "../types";

const CountriesState = (props) => {
  const initialState = {
    countries: [],
    country: {},
    region: "",
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(countriesReducer, initialState);
  const setLoading = () => dispatch({ type: SET_LOADING });
  const setRegion = (region) => dispatch({ type: SET_REGION, payload: region });

  const getCountries = async (region) => {
    setLoading();
    setRegion(region);
    await axios
      .get(
        region === ""
          ? "https://restcountries.eu/rest/v2/all"
          : `https://restcountries.eu/rest/v2/region/${region}`
      )
      .then((res) => {
        dispatch({ type: GET_COUNTRIES, payload: res.data });
      });
  };

  const getCountry = async (code) => {
    setLoading();
    await axios
      .get(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then((res) => {
        dispatch({ type: SET_ERROR, payload: false });
        dispatch({ type: GET_COUNTRY, payload: res.data });
      })
      .catch((err) => dispatch({ type: SET_ERROR, payload: true }));
  };

  const serachCountries = async (name) => {
    setLoading();
    await axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => {
        dispatch({ type: GET_COUNTRIES, payload: res.data });
      })
      .catch((err) => dispatch({ type: GET_COUNTRIES, payload: [] }));
  };

  return (
    <countriesContext.Provider
      value={{
        loading: state.loading,
        countries: state.countries,
        country: state.country,
        region: state.region,
        error: state.error,
        getCountries,
        serachCountries,
        setRegion,
        getCountry,
      }}
    >
      {props.children}
    </countriesContext.Provider>
  );
};

export default CountriesState;
