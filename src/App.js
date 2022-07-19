import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Characters from './Characters';
//import Character from '../src/Characters/Character';
import Search from './Search';

//https://gateway.marvel.com:443/v1/public/characters?apikey=1ffdef23335e8a0d66472e6377bfefdd

//private key : 65863fa7636b95f1cccbbf069badba422143906f
//public key : 1ffdef23335e8a0d66472e6377bfefdd
//ts:1
//165863fa7636b95f1cccbbf069badba422143906f1ffdef23335e8a0d66472e6377bfefdd

//hash:d23c60ea2b610ea755740abc2b502cb1

function App() {

const [characters, setCharacters] = useState([]);
const [query, setQuery] = useState('');

useEffect(()=> {

  const fetch = async()=>{
  if(query===''){
  const result = await axios(`https://gateway.marvel.com:443/v1/public/characters?limit=10&ts=1&apikey=1ffdef23335e8a0d66472e6377bfefdd&hash=d23c60ea2b610ea755740abc2b502cb1`)
  console.log(result.data.data.results)
  setCharacters(result.data.data.results)
  } else {
  const result = await axios(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&limit=30&ts=1&apikey=1ffdef23335e8a0d66472e6377bfefdd&hash=d23c60ea2b610ea755740abc2b502cb1`)
  console.log(result.data.data.results)
  setCharacters(result.data.data.results)
  }

}
 
fetch()
},[query])



  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar__container">
          <img className="logo__marvelous" alt="logo-marvelous" src="../../logo-marvelous.png"/>
          <Search search={(q)=>setQuery(q)}/>
        </div>
      </nav>    

    <div className='container'>
      <Characters characters={characters} />
    </div>


</div>

  );

}

export default App;
