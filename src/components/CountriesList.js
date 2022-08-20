import countriesData from '../countries.json' 
import {useState} from 'react'
function CountriesList(){
const [countries, setCountries]= useState(countriesData)

    return(
        <div>  
            <ul>{countries.map((eachCountry )=>{
                return(
                    <li key={eachCountry.alpha2Code}>{eachCountry.name.official}</li>
                )
            })}</ul>
        </div>
    )
}
export default CountriesList;