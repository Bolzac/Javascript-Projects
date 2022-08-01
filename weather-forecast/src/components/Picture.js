import React, { useEffect, useReducer } from 'react'

const reducer = (state,action) =>{
    switch(action.type){
        case 'clear sky' : 
            return 'fas fa-sun fa-9x'
        case 'few clouds' : 
            return 'fas fa-cloud-sun fa-9x'
        case 'overcast clouds' : 
            return 'fas fa-cloud fa-9x'
        case 'broken clouds' : 
            return 'fas fa-cloud fa-9x'
        case 'shower rain' : 
            return 'fas fa-cloud-shower-heavy fa-9x'
        case 'rain' : 
            return 'fas fa-cloud-sun-rain fa-9x'
        case 'thunderstorm' : 
            return 'fas fa-bolt fa-9x'
        case 'snow' : 
            return 'fas fa-snowflake fa-9x'
        case 'mist' : 
            return 'fas fa-smog fa-9x'
        case 'light rain' :
            return  'fas fa-cloud-rain fa-9x'
        case 'scattered clouds' :
            return 'fas fa-cloud fa-9x'
        default : 
            return null
    }   
}

export default function Picture(props) {

    const [weather, dispatch] = useReducer(reducer)

    useEffect(() =>{
        dispatch({type : props.weather})
    },[props])

    return (
        <React.Fragment>
            {props.weather === undefined ? null : (
                <i className={weather}></i>
            )}
        </React.Fragment>
    )
}
