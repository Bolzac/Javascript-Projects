import React, { useContext } from 'react'
import {WeatherContext} from '../App'

export default function Information() {

    const context = useContext(WeatherContext)
    const info = context.Info
    return (
        <div className="d-flex" style={{fontStyle : 'oblique', fontSize : '2rem' , fontWeight : 'bold', color : 'black'}}>
            {
                info==='info' ?  (<div className="d-flex">
                            <ul className="p-3" style={{listStyle: "none"}}>
                                <li>Country : </li>
                                <li>Weather : </li>
                                <li>Temperature : </li>
                            </ul>
                            <ul className="p-3" style={{listStyle: "none"}}>
                                <li>Felt Temperature : </li>
                                <li>Max Temperature </li>
                                <li>Min Temperature : </li>
                            </ul>
                        </div>) :  (
                            <div className="d-flex">
                            <ul className="p-3" style={{listStyle: "none"}}>
                                <li>Country : {info.country} </li>
                                <li style={{textTransform : 'capitalize'}}>Weather : {info.weather[0].description}</li>
                                <li>Temperature : {Math.floor(info.main.temp) -273} °C </li>
                            </ul>
                            <ul className="p-3" style={{listStyle: "none"}}>
                                <li>Felt Temperature : {Math.floor(info.main.feels_like) -273} °C </li>
                                <li>Max Temperature : {Math.floor(info.main.temp_max)-273} °C</li>
                                <li>Min Temperature : {Math.floor(info.main.temp_min)-273} °C</li>
                            </ul>
                        </div>
                        ) 
            }
        </div>

    )
}
