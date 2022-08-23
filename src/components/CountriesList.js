import countriesData from '../countries.json';
import { useState } from 'react';
import CountryLink from './CountryLink';

function CountriesList() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <ul className="list-group">
      {countries.map((eachCountry) => {
        return (
          // <li key={eachCountry.alpha2Code}>{eachCountry.name.official}</li>
          <CountryLink
            className="goiaba"
            key={eachCountry.alpha2Code}
            country={eachCountry}
          />
        );
      })}
    </ul>
  );
}
export default CountriesList;
