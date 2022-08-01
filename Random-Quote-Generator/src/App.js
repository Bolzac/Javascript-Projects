import './App.css';
import axios from 'axios'
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from 'react';

function App() {

  const [quote, setQuote] = useState(null)
  const [color, setColor] = useState('rgb(1,1,1)')
  const [urltw, setUrl] = useState('https://twitter.com/home')

  useEffect( () => {
    const func = async () => {

      const quote = await axios.get('http://quotes.stormconsultancy.co.uk/random.json').then( res => { return res } )
      setQuote(quote)
      setColor(`rgb(${Math.floor(Math.random()*241)},${Math.floor(Math.random()*241)},${Math.floor(Math.random()*241)})`)
      const sentence = quote.data.quote.replace(/ /g,'%20')
      const author = quote.data.author.replace(/ /g,'%20')
      setUrl(`https://twitter.com/intent/tweet?hashtags=quotes&related=&text="${sentence}"-${author}`)

      }
    func()
  },[] )

  const changeQuote = async () =>{
    const quote = await axios.get('http://quotes.stormconsultancy.co.uk/random.json').then( res => { return res } )
    setQuote(quote)
    setColor(`rgb(${Math.floor(Math.random()*121)},${Math.floor(Math.random()*121)},${Math.floor(Math.random()*121)})`)
    const sentence = quote.data.quote.replace(/ /g,'%20')
    const author = quote.data.author.replace(/ /g,'%20')
    setUrl(`https://twitter.com/intent/tweet?hashtags=quotes&related=&text="${sentence}"-${author}`)
  }

  const background = useAnimation()
  const font = useAnimation()

  background.start({
    backgroundColor : color,
    transition : { duration : 0.5}
  })

  font.start({
    color : color,
    transition : { duration : 0.5}
  })

  return (
    <motion.div animate={ background } className="vh-100 d-flex justify-content-center align-items-center" >
      <div id="card" className="card p-5" style={{width : '35rem'}}>
        <div className="card-body d-flex justify-content-center">
          <div className="card-text">
            <motion.div animate={ font } className="d-flex font">
            <i className="fas fa-quote-left fa-2x"></i>
              { quote !==null ? <blockquote className="blockquote">
                                  <h3 className="playfair mb-5">{quote.data.quote}</h3>
                                  <motion.footer animate={ font } className="blockquote-footer float-end font" >{quote.data.author}</motion.footer>
                                </blockquote> : <p>...</p>
              }
            </motion.div>
            <div className="d-flex justify-content-between">
              <div>
                <a title="Post it on Twitter" href={urltw} target="_blank"><motion.button animate={ background } style={{ color : 'white'}} className="btn newQuote me-1" ><i className="fab fa-twitter"></i></motion.button></a>
              </div>
              <div>
                <motion.button animate={ background } style={{color : 'white'}} onClick={ () => changeQuote() } className="btn newQuote">New Quote</motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;