import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) =>{
  switch(action.type){
    case 'increment' : 
      return state +1
    case 'decrement' :
      return state -1
    case 'generator' :
      if(action.min < action.max){
        state = Math.floor(Math.random() * (action.max - action.min+1) ) + action.min
      }
      return state
    default :
      return null 
  }
}

function App() {

  let initialState = 0
  const [value, dispatchV] = useReducer(reducer,initialState)
  const [min, dispatchMin] = useReducer(reducer,initialState)
  const [max, dispathMax] = useReducer(reducer, initialState)
  console.log(min,max,value)

  return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
      <div className="border" style={{width : '30rem', height: '10rem'}}>
        <div className="d-flex flex-column align-items-center mt-4">
          <div>
            {value}
          </div>
          <div>
            <form className="d-flex">
              <div className="input-group">
                <div className="d-flex flex-column">
                  <button onClick={() => dispatchMin({type : 'increment'})}  type="button" className="d-flex justify-content-center align-items-center" style={{height : "1.2rem"}}><i className="fas fa-plus" style={{fontSize : "0.6rem"}}></i></button>
                  <button onClick={() => dispatchMin({type : 'decrement'})} type="button" className="d-flex justify-content-center align-items-center" style={{height : "1.2rem"}}><i className="fas fa-minus"></i></button>
                </div>
                <input type="text"  value={min} style={{height : "2.4rem", width : "4rem"}}/>                
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-less-than-equal me-3"></i>
                <i className="fas fa-less-than-equal ms-3"></i>
              </div>
              <div className="input-group">
                <input type="text" value={max} style={{height : "2.4rem", width : "4rem"}}/>  
                <div className="d-flex flex-column">
                  <button onClick={() => dispathMax({type : 'increment'})} type="button" className="d-flex justify-content-center align-items-center" style={{height : "1.2rem"}}><i className="fas fa-plus" style={{fontSize : "0.6rem"}}></i></button>
                  <button onClick={() => dispathMax({type : 'decrement'})} type="button" className="d-flex justify-content-center align-items-center" style={{height : "1.2rem"}}><i className="fas fa-minus"></i></button>
                </div>              
              </div>
            </form>
          </div>
          <div className="mt-3">
            <button type="button" onClick={() => dispatchV({type : 'generator', min : min, max : max})}>Generate Number</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;