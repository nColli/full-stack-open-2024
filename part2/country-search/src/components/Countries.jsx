/* eslint-disable react/prop-types */

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
