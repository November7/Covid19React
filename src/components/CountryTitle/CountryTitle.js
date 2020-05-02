import React from 'react'
import './CountryTitle.scss'

export default({
    Country,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered
}) => {
    return (
        <div className="countryTitle">
            <div className="title">{Country}</div>
            <div className="title">{TotalConfirmed}</div>
            <div className="title">{TotalDeaths}</div>
            <div className="title">{TotalRecovered}</div>
        </div>
    )
}