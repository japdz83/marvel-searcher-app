import React, { useState, useEffect } from 'react'
import './App.scss';
import axios from 'axios'
import { Navbar } from './components/NavBar';
import CardCaracters from './components/CardCaracters';

const apiKey = '14abdce9c11fa0c4cbd2b06011e75f74'

const hash = 'e9e7237277337b1b699e19211118ab78'

const baseUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`

// const searchUrl = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith${query}&ts=1&apikey=${apiKey}&hash=${hash}`



function App(  ) {

  const [hero, setHero] = useState([])

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    
    const fetch = async () => {
        const result = await axios(baseUrl)
        console.log(result.data.data.results);
        setHero(result.data.data.results)
        setLoading(false)
      
  }
    fetch()
  }, []);

  return (
    <div >
      <Navbar >  </Navbar>
      <div className="container">
        <CardCaracters hero={hero} isLoading={isLoading} />
      </div>
      
    </div>
  );
}

export default App;
