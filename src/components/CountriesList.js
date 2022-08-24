
import { useState } from 'react';
import CountryLink from './CountryLink';

function CountriesList({countries}) {
  

  return (
    <ul className="list-group">
      {countries.map((eachCountry) => {
        return (
       
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
