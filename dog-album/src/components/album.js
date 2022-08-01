import React from 'react'
import beagle from '../images/beagle.jpg'
import bulldog from '../images/bulldog.jpg'
import OneOf from './OneOf'
import labrador from '../images/labrador.jpg'
import australian from '../images/australian.jpg'
import cairn from '../images/cairn.jpg'
import dachshund from '../images/dachshund.jpg'
import dalmatian from '../images/dalmatian.jpg'
import mountain from '../images/mountain.jpg'
import pembroke from '../images/pembroke.jpg'
import retriever from '../images/retriever.jpg'
import setter from '../images/setter.jpg'
import sheepdog from '../images/sheepdog.jpg'
import siberian from '../images/siberian.jpg'
import { Col, Container, Row } from 'react-bootstrap'


const album = () => {

    const dogs = [
        beagle,
        bulldog,
        labrador,
        australian,
        cairn,
        dachshund,
        dalmatian,
        mountain,
        pembroke,
        retriever,
        setter,
        sheepdog,
        siberian
    ]

    return (
        <div className="border">
    <Container fluid>
        <Row xs={2} sm={2} md={2} lg={3} xl={4} style={{boxSizing : 'border-box', height : '34rem', overflowY : 'scroll'}}>
            {
                dogs.map( dog => {
                    return <Col> <OneOf pic = {dog} key = {dog} /> </Col> 
                } )
            }
        </Row>
    </Container>
        </div>
    )
}

export default album
