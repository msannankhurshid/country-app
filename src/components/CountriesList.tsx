import React from "react";
import CountryData from './CountriesData';
import { Countries } from '../interfaces/Country.interface';

const CountriesList = (props: Countries) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Country Name</th>
          <th>Country Code</th>
        </tr>
      </thead>
      <tbody>
        {props.countries.map(CountryData)}
      </tbody>
    </table>
  );
};

export default CountriesList;
