/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState({
        temp_c: null, 
        condition: {
            icon: "",
            alt: ""
        },
        wind_mph: null, 
        wind_dir:null
    });

    useEffect(() => {
        console.log("use effect weather");
        const key = '4043c101579c4fb180d203517241801'

        axios
        .get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${capital}`)
        .then((response) => {
            const { data } = response
            console.log("info api",response);
            setWeather(data.current)
        });

    }, [capital])

    console.log('weather:',weather);


    return <div>
        <h2>Weather in {capital}</h2>
        <p><strong>temperature:</strong> {weather.temp_c} Celsius</p>
        <img src={weather.condition.icon} alt={weather.condition.text} />
        <p><strong>wind:</strong> {weather.wind_mph} mph direction {weather.wind_dir}</p>
    </div>
}

export const Countries = ({ countries, nameCountry, setNewCountrySearch }) => {
    const handleClick = (event) => {
        console.log(event);
        const countryName = event.target.value

        //pongo el buscador con el nombre del pais
        setNewCountrySearch(countryName)
    }


    if (nameCountry != '') {
        console.log("search",nameCountry);

        let countriesFilter = []

        nameCountry = nameCountry.toLowerCase();
        countries.map((country) => {
            if (country.name.common.toLowerCase().includes(nameCountry)) {
                countriesFilter.push(country)
            }
        })

        console.log("find countries:", countriesFilter);

        if (countriesFilter.length > 10) {
            return <p>Too many matches. specify another filter</p>
        } else 
            if (countriesFilter.length === 1) {
                const country = countriesFilter[0];
                const languages = Object.values(country.languages);

                return (
                    <div>
                        <h1>{country.name.common}</h1>
                        <p>capital {country.capital}</p>
                        <p>population {country.population}</p>
                        <h2>languages</h2>
                        <ul>
                            {languages.map((language) => {
                                return <li key={language}>{language}</li>
                            })}
                        </ul>
                        <img src={country.flags.png} alt={country.flags.alt} />
                        <Weather capital={country.capital}></Weather>
                    </div>
                )
            } else {
                
                return <div>
                    {countriesFilter.map((country) => {
                        return <div key={country.name.common}>
                            {country.name.common}
                            <button value={country.name.common} onClick={handleClick}>show</button>
                        </div> 
                    })}
                    </div>
            }
    }
}
