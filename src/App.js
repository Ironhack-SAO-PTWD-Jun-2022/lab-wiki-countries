
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import countriesData from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList/>
      <Routes>
            <Route path='/:alpha3code' element={<CountryDetails countries={countriesData}/>} />
      </Routes>
    </div>
  );
}

export default App;
