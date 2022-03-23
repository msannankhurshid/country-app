import React, { useState } from "react";
import { SearchCountry } from "../interfaces/Country.interface";


const SearchBar = (props: SearchCountry) => {
  const [code, setCode] = useState('');

  const onInputChange = (code: string) => {
    setCode(code);
    props.searchCountry(code);
  }

  return (
    <div>
      <input
        placeholder="Search Countries"
        className="input-field form-control"
        value={code}
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
