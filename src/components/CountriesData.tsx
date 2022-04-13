import React from "react";
import { Country } from '../interfaces/Country.interface';

const CountryData = (country: Country) => {
  return (
    <tr key={country.code}>
      <td>{country.name}</td>
      <td>{country.code}</td>
    </tr>
  );
};

export default CountryData;
