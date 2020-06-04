import React, { useEffect, useContext } from "react";
import $ from "jquery";
import CountriesContext from "../context/RestC/countriesContext";
import Country from "../components/Country";
import Spinner from "../components/layout/Spinner";

const Countries = () => {
  const countriesContext = useContext(CountriesContext);
  const {
    loading,
    getCountries,
    countries,
    region,
    serachCountries,
  } = countriesContext;
  var counter = 0;

  useEffect(() => {
    getCountries(region);

    const regions = $(".options ul li");
    regions.click(function (event) {
      getCountries(event.target.textContent);
    });

    $("main").click(function (event) {
      if (event.target.className === "top") {
        $(".options ul").css("animationName", "open");
      } else {
        $(".options ul").css("animationName", "close");
      }
    });

    // eslint-disable-next-line
  }, []);

  const filter = () => {
    counter++;
    if (counter % 2 !== 0) {
      $(".options ul").css("animationName", "open");
    } else {
      $(".options ul").css("animationName", "close");
    }
  };

  const search = () => {
    var name = $("input").val();
    if (name === "") {
      getCountries("");
    } else {
      serachCountries(name);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="head">
          <div className="space">
            <form action="">
              <div className="input" onKeyUp={search}>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search for a country" />
              </div>
            </form>
            <div className="filter">
              <div className="top" onClick={filter}>
                <div className="space2">
                  <p>Filter by region</p>
                  <i className="fas fa-angle-down"></i>
                </div>
              </div>
              <div className="options">
                <ul>
                  <li>Africa</li>
                  <li>Americas</li>
                  <li>Asia</li>
                  <li>Europe</li>
                  <li>Oceania</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {!loading ? (
          <Country countries={countries} amount={countries.length} />
        ) : (
          <Spinner />
        )}
      </div>
    </main>
  );
};

export default Countries;
