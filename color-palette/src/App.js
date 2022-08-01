import { createContext, useReducer } from 'react';
import './App.css';
import Colors from './components/Colors';

export const ColorContext = createContext()

function check(a,b){
  return JSON.stringify(a) !== JSON.stringify(b)
}

const reducer = (state,action) => {
  switch(action.type){
    case 'ADD_COLOR' :
      if(state !== null){
        localStorage.setItem('colors',JSON.stringify([...state,action.color]))
        return [...state,action.color]
      }else{
        localStorage.setItem('colors',JSON.stringify([action.color]))
        return [action.color]
      }
    case 'DELETE_COLOR' :
      const array = state.filter( color => check(color,action.color))
      localStorage.setItem('colors',JSON.stringify(array))
      return array 
    case 'CHANGE_COLOR' :
      const newState =  state.filter( color => check(color,action.previous) )
      localStorage.setItem('colors',JSON.stringify([...newState,action.new]))
      return [
        ...newState,action.new
      ]
    default :
      return state
  }
}

function App() {
 
  let initialState = JSON.parse(localStorage.getItem('colors'))

  const [colors, dispatch] = useReducer(reducer, initialState)

  return (
    <ColorContext.Provider value={{colors,dispatch}}>
      <div>
        <Colors />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
