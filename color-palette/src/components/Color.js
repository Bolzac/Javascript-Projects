import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'
import {ColorContext} from '../App'

const Color = (props) => {

    const context = useContext(ColorContext)
    const dispatch = context.dispatch

    let rgb = {
        r : (props.color[0]).toString(),
        g : (props.color[1]).toString(),
        b : (props.color[2]).toString()
    }

    const [hover, isHover] = useState(false)
    const [opacity1, setOpacity1] = useState('0.7')
    const [opacity2, setOpacity2] = useState('0.7')
    const [RGB, setRGB] = useState(rgb)
    const [edit, isEditing] = useState(false)
    
    let style = {
        height : '15rem',
        backgroundColor : `rgb(${RGB.r},${RGB.g},${RGB.b})`,
        cursor : 'pointer'
    }

    const submit = e => {
        e.preventDefault()
        dispatch({ type : 'CHANGE_COLOR', previous : [Number(rgb.r),Number(rgb.g),Number(rgb.b)], new : [Number(RGB.r),Number(RGB.g),Number(RGB.b)]})
        isEditing(false)
    }

    return (
        <div>
            <Card onMouseEnter={ () => {isHover(true)}} onMouseLeave={() => {isHover(false)}} style={style}>
                { 
                hover ? 
                <span className="ms-auto p-2">
                    <i onClick={ () => isEditing(!edit) } onMouseEnter={() => {setOpacity1('1')}} onMouseLeave={() => {setOpacity1('0.7')}} className=" mx-1 fas fa-edit" style={{opacity : opacity1, color : 'white'}}></i>
                    <i onClick={() => dispatch({type : 'DELETE_COLOR', color : [Number(RGB.r),Number(RGB.g),Number(RGB.b)] }) } onMouseEnter={() => {setOpacity2('1')}} onMouseLeave={() => {setOpacity2('0.7')}} className=" mx-1 fas fa-times" style={{opacity : opacity2, color : 'white'}}></i>
                </span>
                 : 
                 '' 
                }
            </Card>
            {
                edit ?  
                <form onSubmit={ e => submit(e) }>
                    <div className="input-group">
                        <span className="input-group-text">rgb</span>
                        <input type="text" className="form-control" aria-describedby="button-addon2" value={`${RGB.r},${RGB.g},${RGB.b}`} onChange=
                        {
                            e => {
                                let array = (e.target.value).split(',')
                                setRGB({r : array[0], g : array[1], b : array[2] }) 
                            } 
                        } />
                        <button className="btn btn-outline-secondary" id="button-addon2" type="submit"> Update </button>
                    </div>
                </form>      : <p id="text">rgb({RGB.r},{RGB.g},{RGB.b})</p>
            }
        </div>
    )
}

export default Color