import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import CountriesList from './CountriesList';
import { Country, Countries } from '../interfaces/Country.interface';

const SearchCountries = (props: Countries) => {
  const [countries, setCountries] = useState<Array<Country>>([]);

  useEffect(() => {
    if (props.countries) {
      setCountries([...props.countries]);
    }
  }, [props]);

  const searchCountry = (code: string) => {
    const countriesData = props.countries.filter((data: Country) => (filterCondition(data, code)));
    setCountries(countriesData);
  };

  const filterCondition = (data: Country, code: string) => {
    return (data.code.toLowerCase().indexOf(code.trim().toLowerCase()) !== -1);
  };

  return (
    <div>
      <SearchBar searchCountry={searchCountry} />
      <CountriesList countries={countries} />
    </div>
  );
}

export default SearchCountries;