import React from 'react'
import CountryTitle from '../CountryTitle/CountryTitle';
import './CountriesTable.scss'

export default({countries}) => {    
   
    return (
        <div className="countriesTable">
            {
                countries.map(country => {
                    return (<CountryTitle
                            Country={country.Country}
                            TotalConfirmed={country.TotalConfirmed}
                            TotalDeaths={country.TotalDeaths}
                            TotalRecovered={country.TotalRecovered}
                    />)
                })
            }
        </div>
               
    )
}

