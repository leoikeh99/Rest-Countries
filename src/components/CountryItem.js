import React from "react";
import { Link } from "react-router-dom";

const CountryItem = ({ name, capital, flag, region, population, code }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={flag} alt="" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <p>
          <span className="bold">Population:</span> {population}
        </p>
        <p>
          <span className="bold">Region:</span> {region}
        </p>
        <p>
          <span className="bold">Capital:</span> {capital}
        </p>
        <div className="more">
          <Link to={`/more/${code}`}>more</Link>
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
