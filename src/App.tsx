import React, { useState, useEffect } from 'react';
import './App.css';

import SearchCountries from './components/SearchCountries';
import { fetchCountries } from './actions/index';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      const countries = await fetchCountries();
      setCountries(countries);
      setLoader(false);
    })();
  }, []);

  return (
    <div className="App">
      <div className={(loader ? 'loader' : '')}></div>
      <div className={`App-header ${(loader ? 'low-opacity' : '')}`}>
        <SearchCountries countries={countries} />
      </div>
    </div>
  );
};

export default App;
