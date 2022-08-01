import React, { useContext } from 'react'
import { Row,Col, Container,Card } from 'react-bootstrap'
import {ColorContext} from '../App'
import Color from './Color'
import ColorForm from './ColorForm'
import { v4 as uuidv4 } from 'uuid';

const Colors = () => {

    const context = useContext(ColorContext)
    let colors = context.colors
    
    return (
        <Container fluid>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="my-5" style={{boxSizing : 'border-box'}}>
                {
                    colors === null ? null :
                    colors.map(color => {
                        return <Col key={uuidv4()}><Color color = {color} /></Col>
                    })
                }
                <Col>
                    <Card style={{ height : "15rem" }}>
                        <Card.Body>
                                <ColorForm/>
                        </Card.Body>    
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Colors

