import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import useSound from 'use-sound'
import { drumContext } from '../App'
import switchSound from '../switch-1.mp3'

const RightContainer = styled.div`
width : 100%;
height : 100%;
display : flex;
flex-direction : column;
justify-content : space-around;
align-items : center;
border-left : 3px solid black;
`

const Mod = styled.div`
width : 200px;
height : 75px;
display : flex;
justify-content : center;
align-items : center;
background-color : #d7f7f4;
border: 1px solid #545959;
border-radius : 30px;
font-family: 'Press Start 2P', cursive;
font-size : 12px;
`

const Button = styled.button`
width : 100%;
height : 100%;
background-color : #d7f7f4;
box-sizing: border-box;
`

export const RightSide = () =>{

    const {isHeater,setHeater,isPowerOn,setPower,button,setButton} = useContext(drumContext)
    const [volume, setVolume] = useState(0.5)
    const [isVolumeChange, setVolumeChange] = useState(false)
    const [play] = useSound(switchSound)

    const audio = document.getElementById('audio')
    audio.volume = volume

    return(
        <RightContainer>
            <div style={{display : 'flex'}}>
                <Button onClick={ () => {
                    setPower(!isPowerOn)
                    play()
                } }><h4 style={{boxSizing : 'border-box'}}>Power</h4></Button>
                <i className="fas fa-circle" style={ isPowerOn ?{marginLeft : '5px', marginTop: '20px', color : 'red'} : {marginLeft : '5px', marginTop: '20px', color : 'white'}}></i>
            </div>
            <div>
                <Mod>
                    {!isVolumeChange ? 
                    <div>
                        {
                            isHeater ? 
                            <div>
                                {button === '' ? <p> Heater Kit </p> : <p> {button} </p>  }
                            </div> : 
                            <div>
                                {button === '' ? <p>Smooth Piano Kit</p> : <p> {button} </p>}
                            </div>
                        }
                    </div> :
                    <div>
                        <p>Volume : {Math.floor(volume*100)}</p>
                    </div>

                    }
                </Mod>
            </div>
            <div>
                <input type="range" value={volume} min={0} max={1} step={0.01} onChange={ e => setVolume(e.target.value)} onMouseDown= { () => setVolumeChange(true) } onMouseUp = { () => setVolumeChange(false)} />
            </div>
            <div>
                <button onClick={ () => {
                    setHeater(!isHeater)
                    setButton('')
                    play()
                } }>Change Bank</button>
            </div>
        </RightContainer>
    )
}