import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../ui/Loader";

function CountryDetails() {
  const param = useParams();
  // individual id
  // console.log("individulal id");

  // console.log(param);

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(param.id);
      // individual data from api
      // console.log("individual data from api");
      // console.log(res);
      if (res.status === 200) {
        console.log(res.data[0]);
        setCountry(res.data[0]);
      }
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {/* <h1>{country.name.official}</h1> */}
        {/* <h1>{country ? country.name.official : "Loading..."}</h1> */}

        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />

            <div className="country-content">
              <p className="card-title"> {country.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {country.name.nativeName.eng.official}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="country-card-backBtn">
        <NavLink to="/country" className="backBtn">
          <button>Go Back</button>
        </NavLink>
      </div>
    </section>
  );
}

export default CountryDetails;
