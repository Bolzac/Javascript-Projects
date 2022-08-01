import React, { useContext } from 'react'
import {AlbumContext} from '../App'

const OneOf = (props) => {

    const context = useContext(AlbumContext)

    return (
            <img onClick={() => {context.dogDispatch({type : 'SET_DOG', dog : props.pic })}} src={props.pic} alt={props.pic} style={{width : '10rem', cursor : 'pointer'}} className="my-2 img-thumbnail"/>
    )
}

export default OneOf
