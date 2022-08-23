import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import countriesData from './countries.json';
import CountryLink from './components/CountryLink';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          <CountriesList />
        </div>

        <div className="col-7">
          <Routes>
            <Route
              path="/:alpha3code"
              element={<CountryDetails countries={countriesData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
