import React from "react";
import CountryItem from "./CountryItem";

const Country = ({ countries, amount }) => {
  return (
    <div className={amount < 3 ? "flex" : "grid"}>
      {countries.map((country) => (
        <CountryItem
          name={country.name}
          capital={country.capital}
          region={country.region}
          flag={country.flag}
          population={country.population}
          code={country.alpha2Code}
          key={country.alpha2Code}
        />
      ))}
    </div>
  );
};

export default Country;
