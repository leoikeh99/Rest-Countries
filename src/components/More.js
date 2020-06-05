import React, { useEffect, useContext } from "react";
import CountriesContext from "../context/RestC/countriesContext";
import Spinner from "./layout/Spinner";
import { Link } from "react-router-dom";

const More = ({ match }) => {
  const countriesContext = useContext(CountriesContext);
  const { country, loading, getCountry, error } = countriesContext;

  const {
    name,
    flag,
    region,
    capital,
    population,
    currencies,
    topLevelDomain,
    languages,
    subregion,
    borders,
    nativeName,
  } = country;

  useEffect(() => {
    getCountry(match.params.code);
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <section className="more-2">
        <div className="container">
          <Link to="/" className="link">
            <i className="fas fa-arrow-left"></i> Back
          </Link>
          <h1>Country Not Found</h1>
        </div>
      </section>
    );
  } else {
    return !loading ? (
      <section className="more-2">
        <div className="container">
          <Link to="/" className="link">
            <i className="fas fa-arrow-left"></i> Back
          </Link>

          <div className="flex-2">
            <div className="flag">
              <img src={flag} alt="" />
            </div>
            <div className="info-long">
              <h2>{name}</h2>
              <div className="info">
                <div className="lists">
                  <ul>
                    <li>
                      <span className="bold">Native Name: </span>
                      {nativeName}
                    </li>
                    <li>
                      <span className="bold">Population: </span>
                      {population}
                    </li>
                    <li>
                      <span className="bold">Region: </span>
                      {region}
                    </li>
                    <li>
                      <span className="bold">Sub Region: </span>
                      {subregion}
                    </li>
                    <li>
                      <span className="bold">Capital: </span>
                      {capital}
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <span className="bold">Top Level Domain: </span>
                      {topLevelDomain}
                    </li>
                    <li>
                      <span className="bold">Currencies: </span>
                      {currencies &&
                        currencies.map((currency) => (
                          <span key={currency.code}>{currency.name}</span>
                        ))}
                    </li>
                    <li>
                      <span className="bold">Languages: </span>
                      {languages &&
                        languages.map((language) => (
                          <span key={language.iso639_1}>{language.name}</span>
                        ))}
                    </li>
                  </ul>
                </div>
                <div className="borders">
                  <h4>Border Countries: </h4>
                  <div className="grid-2">
                    {borders && borders.length !== 0 ? (
                      borders.map((border) => (
                        <Link
                          onClick={() => getCountry(border)}
                          to={`/more/${border}`}
                          key={border}
                          className="border"
                        >
                          {border}
                        </Link>
                      ))
                    ) : (
                      <p>None</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <Spinner />
    );
  }
};

export default More;
