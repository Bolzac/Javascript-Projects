import React, { createContext, useReducer } from 'react'
import Picture from './components/Picture'
import Search from './components/Search'
import Information from './components/Information'

export const WeatherContext = createContext()

const reducer = (state,action) => {
  switch(action.type){
    case 'SET_INFO' :
      return {
          weather : action.payload.weather,
          country : action.payload.name,
          main : action.payload.main
      }
    default :
      return null
  }
} 

function App() {

  const initialState = 'info'
  const [info, dispatch] = useReducer(reducer,initialState)

  return (

    <WeatherContext.Provider value={{Info : info, Weatherdispatch : dispatch}}>
        <div id="main" className="vh-100 d-flex justify-content-center align-items-center" style={{backgroundImage : null, backgroundRepeat : 'no-repeat', backgroundSize : 'cover', backgroundPosition : 'center'}}>
         <div className="d-flex">
             <div className="mx-2 my-3 d-flex align-items-center">{info === 'info' ? <Picture/> : <Picture weather = {info.weather[0].description}/>}</div>
             <div className="d-flex flex-column bd-highlight">
               <div className="mx-2 my-3"><Search/></div>
               <div className="mx-2 my-3 p-3"><Information/></div>
             </div>
         </div>
       </div>
    </WeatherContext.Provider>

  );
}

export default App;