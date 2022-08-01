import React, {useContext, useState } from 'react'
import axios from 'axios'
import {WeatherContext} from '../App'

export default function Search() {
    const [city, setCity] = useState('')
    const context = useContext(WeatherContext)
    
    const lookweather = async (e) =>{
        e.preventDefault();
        const weather = await (axios({
            method : 'get',
            url : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86a5f3602111d31a022ead8d55336f58`
        })).then(res =>{return res.data})
        context.Weatherdispatch({type : "SET_INFO", payload : weather})
    }

    return (
        <form onSubmit={lookweather}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="city" name="city" id="city" onChange={(e) =>setCity(e.target.value)}/>
                <button className="btn btn-primary" type="submit"><i className="fas fa-search-location"></i></button>
            </div>
        </form>
    )
}
