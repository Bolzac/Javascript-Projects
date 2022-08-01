import { createContext, useReducer } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import Album from './components/album';
import MainPic from './components/MainPic';
import Navbar from './components/Navbar';

export const AlbumContext = createContext()

const reducer = (state,action) => {
  switch(action.type){
    case 'SET_DOG' : 
      return action.dog
    default : 
      return null
  }
}

function App() {

  const initialState = null

  const [dog, dispatch] = useReducer(reducer,initialState)


  return (
    <AlbumContext.Provider value={{dog : dog, dogDispatch : dispatch}}>
      <div className="vh-100">
        <Navbar/>
        <div className="container my-5">
          <Row xs={1} sm={1} md={1} lg={2} xl={2} className=" row justify-content-start">
            <Col xs={4}>
              <MainPic/>
            </Col>
            <Col xs={8}>
              <Album/>
            </Col>
          </Row>
        </div>
      </div>
      </AlbumContext.Provider>

  );
}

export default App;
