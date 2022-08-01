import './App.css';
import styled from 'styled-components'
import { LeftSide } from './components/leftSide';
import { createContext, useState } from 'react';
import { RightSide } from './components/rightSide';
import KeyboardEventHandler from 'react-keyboard-event-handler'

export const drumContext = createContext()

const FullPage = styled.div`
width : 100%;
height : 100%;
background-color : white;
display : flex;
justify-content : center;
align-items : center;
`

const Pad = styled.div`
width : 60%;
height : 65%;
background-color : white;
display : flex;
border : 6px outset black ;
border-radius : 30px;
background-color :  #5ec482;
`

function App() {

  const [isHeater, setHeater] = useState(true)
  const [isPowerOn, setPower] = useState(true)
  const [button, setButton] = useState('')

  const banks = {
    bankone : [
      {
        id: 'Heater-1',
        key : 'q',
        keyCode : 81,
        src : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        id: 'Heater-2',
        key : 'w',
        keyCode : 87 ,
        src : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        id: 'Heater-3',
        key : 'e',
        keyCode : 69,
        src : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        id: 'Heater-4',
        key : 'a',
        keyCode : 65,
        src : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        key : 's',
        id: 'Clap',
        keyCode : 83,
        src : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        id: 'Open-HH',
        key : 'd',
        keyCode : 68,
        src : 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        id: "Kick-n'-Hat", 
        key : 'z',
        keyCode : 90,
        src : 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        id: 'Kick',
        key : 'x',
        keyCode : 88,
        src : 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        id: 'Closed-HH',
        key : 'c',
        keyCode : 67,
        src : 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
],
  banktwo :[
    {
      keyCode: 81,
      key: 'q',
      id: 'Chord-1',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      key: 'w',
      id: 'Chord-2',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      key: 'e',
      id: 'Chord-3',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      key: 'a',
      id: 'Shaker',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      key: 's',
      id: 'Open-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      key: 'd',
      id: 'Closed-HH',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      key: 'z',
      id: 'Punchy-Kick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      key: 'x',
      id: 'Side-Stick',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      key: 'c',
      id: 'Snare',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ]
}

const audio = document.getElementById('audio')

  return (
    <drumContext.Provider value={{isHeater,setHeater,isPowerOn,setPower,button,setButton}}>
          <FullPage>
            <Pad>
              <div style={{width : '70%'}}> 
                <LeftSide banks = {banks} />
              </div>
              <div style={{width : '30%'}}>
                <RightSide/>
              </div>
            </Pad>
            <KeyboardEventHandler
            handleKeys={["q","w","e","a","s","d","z","x","c"]}
            onKeyEvent={(key, e) => {
                if(isPowerOn){
                    if(isHeater){
                        banks.bankone.forEach( obj =>{
                            if(obj.keyCode === e.keyCode){
                              document.getElementById(key).style.boxShadow ="2px 4px 2px black"
                              setButton(obj.id)       
                              audio.setAttribute('src',obj.src)
                              audio.play()
                              setTimeout(() => {
                                document.getElementById(key).style.boxShadow ="3px 6px 2px black"
                              }, 50);
                            }
                        } )
                    }else{
                        banks.banktwo.forEach( obj =>{
                            if(obj.keyCode === e.keyCode){
                              document.getElementById(key).style.boxShadow ="2px 4px 2px black"
                              setButton(obj.id)       
                              audio.setAttribute('src',obj.src)
                              audio.play()
                              setTimeout(() => {
                                document.getElementById(key).style.boxShadow ="3px 6px 2px black"
                              }, 50);
                            }
                        } )
                    }
                }
            }  } />
          </FullPage>
    </drumContext.Provider>

  );
}

export default App;
