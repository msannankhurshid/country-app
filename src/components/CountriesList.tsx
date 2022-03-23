import React from "react";
import { Country, Countries } from '../interfaces/Country.interface';

function CountriesList(props: Countries) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Country Name</th>
          <th>Country Code</th>
        </tr>
      </thead>
      <tbody>
        {props.countries.map(renderWeather)}
      </tbody>
    </table>
  );
}

function renderWeather(country: Country) {
  return (
    <tr key={country.code}>
      <td>{country.name}</td>
      <td>{country.code}</td>
    </tr>
  );
}

export default CountriesList;
