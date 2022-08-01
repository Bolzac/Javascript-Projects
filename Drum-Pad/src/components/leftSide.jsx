import React, {useContext} from 'react'
import styled from 'styled-components'
import { drumContext } from '../App'

const LeftContainer = styled.div`
width : 100%;
height : 100%;
display : flex;
justify-content : center;
align-items : center;
`

const Buttons = styled.div`
width : 90%;
height : 90%;
display : flex;
justify-content : space-around;
`

const Button = styled.button`
width : 100%;
height : 20%;
border-radius : 50px;
box-shadow : 3px 6px 2px black;
background-color : #d7f7f4
`

const Column = styled.div`
width : 25%;
display: flex;
flex-direction: column;
justify-content : space-around;
`

export const LeftSide = (props) =>{

    const {isHeater,isPowerOn,setButton} = useContext(drumContext)

    const audio = document.getElementById('audio')

    const click = (e) =>{
        if(isPowerOn){
            if(isHeater){
                props.banks.bankone.forEach( obj => {
                    if(obj.key === e.target.id){
                        document.getElementById(e.target.id).style.boxShadow ="2px 4px 2px black"
                        setButton(obj.id)       
                        audio.setAttribute('src',obj.src)
                        audio.play()
                        setTimeout(() => {
                            document.getElementById(e.target.id).style.boxShadow ="3px 6px 2px black"
                        }, 50);
                    }
                } )
            }else{
                props.banks.banktwo.forEach( obj =>{
                    if(obj.key === e.target.id){
                        document.getElementById(e.target.id).style.boxShadow ="2px 4px 2px black"
                        setButton(obj.id) 
                        audio.setAttribute('src',obj.src)
                        audio.play()
                        setTimeout(() => {
                            document.getElementById(e.target.id).style.boxShadow ="3px 6px 2px black"
                        }, 50);
                    }
                } )
            }
        }
    }

    return (
        <LeftContainer>
            <Buttons>
                <Column>
                    <Button id="q" onClick={ (e) => click(e) }>Q</Button>
                    <Button id="a" onClick={ (e) => click(e) }>A</Button>
                    <Button id="z" onClick={ (e) => click(e) }>Z</Button>
                </Column>
                <Column>
                    <Button id="w" onClick={ (e) => click(e) }>W</Button>
                    <Button id="s" onClick={ (e) => click(e) }>S</Button>
                    <Button id="x" onClick={ (e) => click(e) }>X</Button>
                </Column>
                <Column>
                    <Button id="e" onClick={ (e) => click(e) }>E</Button>
                    <Button id="d" onClick={ (e) => click(e) }>D</Button>
                    <Button id="c" onClick={ (e) => click(e) }>C</Button>
                </Column>
            </Buttons>
        </LeftContainer>
    )
}