import { useParams, Link } from 'react-router-dom';

function CountryDetails( {countries} ) {
    const { alpha3code } = useParams();
    const findCountry = countries.find((country) => {
        return country.alpha3Code.toLowerCase() === alpha3code.toLowerCase()
    })

    function findCountryName(a3c) {
        const country = countries.find((country) => {
            return country.alpha3Code.toLowerCase() === a3c.toLowerCase()
        })
        return country.name.official
    }

    return findCountry && (
        <div className="card-detail">
            <h1>{findCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{findCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {findCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {findCountry.borders.map((border) => {
                           return <li key={border}><Link to={`/${border}`}>{findCountryName(border)}</Link></li>
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}

export default CountryDetails;