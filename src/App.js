import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import countriesData from './countries.json';
import axios from 'axios';
import {useState} from 'react';

function App() {
const [countries, setCountries] = useState([]);

axios.get('https://ih-countries-api.herokuapp.com/countries').then((result) => {console.log(result)}); 

  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <CountriesList countries={countries}/>
        </div>

        <div className="col-7">
          <Routes>
            <Route
              path="/:alpha3code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
