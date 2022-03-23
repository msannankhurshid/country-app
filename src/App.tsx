import React, { Component } from 'react';
import './App.css';

import SearchCountries from './components/SearchCountries';
import { fetchCountries } from './actions/index';

class App extends Component {
  props: any;
  state: any;

  constructor(props: any) {
    super(props);

    this.state = { countries: [], loader: true };
  }

  async componentDidMount() {
    const countries = await fetchCountries();
    this.setState({ countries, loader: false });
  }

  render() {
    const { countries, loader } = this.state;
    return (
      <div className="App">
        <div className={(loader ? 'loader' : '')}></div>
        <header className={`App-header ${(loader ? 'low-opacity' : '')}`}>
          <SearchCountries countries={countries} />
        </header>
      </div>
    );
  }
}

export default App;
