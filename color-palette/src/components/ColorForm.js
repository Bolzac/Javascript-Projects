import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {ColorContext} from '../App'

const ColorForm = () => {

    const context = useContext(ColorContext)
    const [R,setR] = useState(0)
    const [G,setG] = useState(0)
    const [B,setB] = useState(0)

    const dispatch = context.dispatch

    return (
        <Form 
        onSubmit={e =>
        {
            e.preventDefault() 
            dispatch({type : 'ADD_COLOR', color : [R,G,B] })
        } 
        }>
            <div className="d-flex">
                <Form.Control type="number" placeholder="R" min = {0} max = {360} value={R} onChange={ e => setR( Number(e.target.value) )} />
                <Form.Control type="number" placeholder="G" min = {0} max = {360} value={G} onChange={ e => setG( Number(e.target.value) )} />
                <Form.Control type="number" placeholder="B" min = {0} max = {360} value={B} onChange={ e => setB( Number(e.target.value) )} />
            </div>
            <div className="d-flex justify-content-center mt-4">
                <Button type="submit" >Enter</Button>
            </div>
        </Form>
    )
}

export default ColorForm
